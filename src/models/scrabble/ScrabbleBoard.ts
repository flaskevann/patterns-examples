import { log } from "../../tools/logging"

import { AbstractScrabbleBoardState,
         ScrabbleBoardReadyState,
         ScrabbleBoardBusyState } from "./ScrabbleBoardState"

import Tile from "./Tile"

import { PlayedScrabbleTiles as PlayedTiles, // Memento class
         PlayedScrabbleTilesHistory as PlayedTilesHistory } from "./PlayedScrabbleMemento" // Caretaker of Memento objects


export default class ScrabbleBoard {
    private playedTilesHistory : PlayedTilesHistory = new PlayedTilesHistory()
    private allPreviouslyPlayedTiles : object // all of the previous played tiles added together
    private newPlayedTiles : PlayedTiles // the tiles played by the previous player

    private players : string[] // player ids
    private turnPlayerId : string

    private state : AbstractScrabbleBoardState

    constructor(players : string[]) {
        if (!players || players.length <= 1 || players.length > 4)
            throw new Error("A game of Scrabble needs 2-4 players.")

        this.state = new ScrabbleBoardReadyState(this)
        this.players = players

        log(`New Scrabble game with ${players.length} players created.`)
        
        this.setNextPlayer()
    }


    private setNextPlayer() {

        // Find next player in list
        if (this.turnPlayerId) {
            for (var p = 0; p < this.players.length; p++) {
                var playerId = this.players[p]

                if (this.turnPlayerId === playerId) {
    
                    if (p === this.players.length-1) this.turnPlayerId = `${this.players[0]}`
                    else this.turnPlayerId = `${this.players[p+1]}`
    
                    break
                }
            }

        // First turn
        } else {
            this.turnPlayerId = `${this.players[0]}`
        }

        log(`Player ${this.turnPlayerId} is now playing.`)

        // Automatically accept turn players previous played tiles, if still in limbo
        if (this.state.canCheckNewTiles() && this.newPlayedTiles.getPlayerId() === this.turnPlayerId)
            this.acceptNewTiles()
    }
    
    public skipTurn(playerId : string) {
        if (this.turnPlayerId !== playerId)
            throw new Error("A waiting player can not skip a turn.")

        log(`Player ${this.turnPlayerId} is skipping his/hers turn.`)

        this.setNextPlayer()
    }


    public exchangeTiles(playerId : string, tiles : string[]) {
        if (playerId !== this.turnPlayerId)
            throw new Error("A waiting player has to wait his/hers turn before exchanging tiles.")

        if (!tiles || tiles.length === 0)
            throw new Error("Cannot exchange zero amount of tiles.")

        log(`Player ${playerId} exchanged one or more tiles`)

        this.setNextPlayer()
    }


    public canPlayNewTiles() {
        return this.state.canPlayNewTiles()
    }

    public playNewTiles(newPlayedTiles : PlayedTiles) {
        if (!newPlayedTiles || Object.keys(newPlayedTiles).length === 0)
            throw new Error("Cannot play without new tiles.")

        if (newPlayedTiles.getPlayerId() !== this.turnPlayerId)
            throw new Error("A waiting player has to wait his/hers turn before playing new tiles.")

        if (!this.state.canPlayNewTiles())
            throw new Error("The board has new tiles that the other player(s) must be given time to possibly challenge first.")

        if (this.state.canCheckNewTiles())
            this.acceptNewTiles() // Accept previously played tiles before playing new ones

        this.newPlayedTiles = Object.assign(newPlayedTiles)
        log(`Player ${this.turnPlayerId} played ${this.newPlayedTiles.toString()}.`)
        
        this.setState(new ScrabbleBoardBusyState(this))

        this.setNextPlayer()
    }


    public canCheckNewTiles() {
        return this.state.canCheckNewTiles()
    }

    public checkNewTiles(playerId : string) {
        if (!this.state.canCheckNewTiles() || !this.newPlayedTiles)
            throw new Error("The board does not have any new played tiles to be checked.")

        if (playerId === this.newPlayedTiles.getPlayerId())
            throw new Error("The player cannot ask for his/hers own tiles to be checked.")

        log(`The new played tiles belonging to ${this.newPlayedTiles.getPlayerId()} was challenged by ${playerId}.`)

        // Fake word checking algo:
        if (Math.random() < 0.5) {
            this.rollbackNewTiles()
        } else {
            this.acceptNewTiles()
        }
    }


    private acceptNewTiles() {
        if (!this.state.canCheckNewTiles() || !this.newPlayedTiles)
            throw new Error("The board has no new played tiles to accept.")

        const playerId = this.newPlayedTiles.getPlayerId()
        const newPlayedTiles = this.newPlayedTiles.getTiles()
        this.newPlayedTiles = null

        Object.keys(newPlayedTiles).forEach((spaceNumber : number) => {
            this.allPreviouslyPlayedTiles[spaceNumber] = newPlayedTiles[spaceNumber]
        });
        log(`The new tiles belonging to ${playerId} was accepted.`)

        this.setState(new ScrabbleBoardReadyState(this))
    }

    private rollbackNewTiles() {
        if (!this.state.canCheckNewTiles())
            throw new Error("The board has no new played tiles to rollback.")

        this.playedTilesHistory.rollback()

        const playerId = this.newPlayedTiles.getPlayerId()
        log(`The played tiles belonging to ${playerId} was rejected.`)
        this.newPlayedTiles.getTiles().forEach((tile : Tile) => {
            log(`Previously played ${tile.getLetter()} tile given back to ${playerId}.`)
        });
        this.newPlayedTiles = null
    
        this.setState(new ScrabbleBoardReadyState(this))
    }


    private setState(newState : AbstractScrabbleBoardState) {
        this.state = newState

        log(`(Board state: ${this.state.getDescription()}.)`)
    }
}