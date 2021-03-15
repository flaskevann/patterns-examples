import { log } from "../../tools/logging"

import { AbstractScrabbleBoardState,
         ScrabbleBoardReadyState,
         ScrabbleBoardBusyState } from "./ScrabbleBoardState"

import { ScrabbleTile as Tile } from "./ScrabbleTile"

import { PlayedScrabbleTiles as PlayedTiles, // Memento class
         PlayedScrabbleTilesHistory as PlayedTilesHistory } from "./PlayedScrabbleTiles" // Caretaker of Memento objects


export default class ScrabbleBoard {
    private playedTilesHistory : PlayedTilesHistory = new PlayedTilesHistory()
    private previouslyPlayedTiles : any = {} // all of the previous played tiles added together
    private newPlayedTiles : PlayedTiles // the tiles played by the previous player

    private playerIds : string[] // in reality you would need some kind of Player profile
    private turnPlayerId : string

    private state : AbstractScrabbleBoardState

    constructor(playerIds : string[]) {
        if (!playerIds || playerIds.length <= 1 || playerIds.length > 4)
            throw new Error("A game of Scrabble needs 2-4 players.")

        this.state = new ScrabbleBoardReadyState(this)
        this.playerIds = playerIds

        log(`New Scrabble game with ${playerIds.length} players created.`)
        
        this.setNextPlayer()
    }


    private setNextPlayer() {

        // Find next player in list
        if (this.turnPlayerId) {
            for (var p = 0; p < this.playerIds.length; p++) {
                var playerId = this.playerIds[p]

                if (this.turnPlayerId === playerId) {
    
                    if (p === this.playerIds.length-1) this.turnPlayerId = `${this.playerIds[0]}`
                    else this.turnPlayerId = `${this.playerIds[p+1]}`
    
                    break
                }
            }

        // First turn
        } else {
            this.turnPlayerId = `${this.playerIds[0]}`
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


    public exchangeTiles(playerId : string, tiles : Tile[]) : Tile[] {
        if (playerId !== this.turnPlayerId)
            throw new Error("A waiting player has to wait his/hers turn before exchanging tiles.")

        if (!tiles || tiles.length === 0)
            throw new Error("Cannot exchange zero amount of tiles.")

        log(`Player ${playerId} exchanged one or more tiles`)

        this.setNextPlayer()

        return tiles // fake exchange algo, just example code
    }


    public canPlayNewTiles() {
        return this.state.canPlayNewTiles()
    }

    public playNewTiles(newPlayedTiles : PlayedTiles) {
        if (newPlayedTiles.getPlayerId() !== this.turnPlayerId)
            throw new Error("A waiting player has to wait his/hers turn before playing new tiles.")

        if (!newPlayedTiles || Object.keys(newPlayedTiles).length === 0)
            throw new Error("Cannot play without new tiles.")

        if (!this.state.canPlayNewTiles())
            throw new Error("The board has new tiles that the other player(s) must be given time to possibly challenge first.")

        if (this.state.canCheckNewTiles())
            this.acceptNewTiles() // Accept previously played tiles before playing new ones

        // Set new played tiles
        Object.keys(newPlayedTiles).forEach(spaceNumber => {
            if (this.previouslyPlayedTiles[spaceNumber])
                throw new Error("Space number already used for previous played tile.")
        })
        this.newPlayedTiles = Object.assign(newPlayedTiles)
        log(`Player ${this.turnPlayerId} played ${this.newPlayedTiles.toString()}.`)

        this.playedTilesHistory.commit(this.newPlayedTiles)
        
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
            this.rejectNewTiles()
        } else {
            this.acceptNewTiles()
        }
    }


    private acceptNewTiles() {
        if (!this.state.canCheckNewTiles() || !this.newPlayedTiles)
            throw new Error("The board has no new played tiles to accept.")

        // Get new play
        const playerId = this.newPlayedTiles.getPlayerId()
        const newPlayedTiles = this.newPlayedTiles.getTiles()
        this.newPlayedTiles = null

        // Save the new play
        Object.keys(newPlayedTiles).forEach(spaceNumber => {               
            if (this.previouslyPlayedTiles[spaceNumber])
                throw new Error("Space number already used for previous played tile.")
            else
                this.previouslyPlayedTiles[spaceNumber] = newPlayedTiles[spaceNumber]
        });
        log(`The new tiles belonging to ${playerId} was accepted.`)

        this.setState(new ScrabbleBoardReadyState(this))
    }

    private rejectNewTiles() {
        if (!this.state.canCheckNewTiles())
            throw new Error("The board has no new played tiles to rollback.")

        this.playedTilesHistory.rollback()

        // Get new play
        const playerId = this.newPlayedTiles.getPlayerId()
        const newPlayedTiles = this.newPlayedTiles.getTiles()
        this.newPlayedTiles = null
        log(`The played tiles belonging to ${playerId} was rejected.`)

        // Return rejected tiles to its player
        Object.keys(newPlayedTiles).forEach(spaceNumber => {
            const tile : Tile = newPlayedTiles[spaceNumber]
            log(`Previously played ${newPlayedTiles[spaceNumber].getLetter()} tile given back to ${playerId}.`)
        })
    
        this.setState(new ScrabbleBoardReadyState(this))
    }


    private setState(newState : AbstractScrabbleBoardState) {
        this.state = newState

        log(`(Board state: ${this.state.getDescription()}.)`)
    }


    public toString() : string {
        return `Scrabble game with ${this.playerIds.length} players and play history "${this.playedTilesHistory.toString()}".`
    }
}