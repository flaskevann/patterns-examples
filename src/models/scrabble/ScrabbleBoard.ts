import { log } from "../../tools/logging"

import { AbstractScrabbleBoardState,
         ScrabbleBoardReadyState,
         ScrabbleBoardBusyState } from "./ScrabbleBoardState"

import { Space } from "./Space"
import Tile from "./Tile"

import PlayedScrabbleTilesMemento from "./PlayedScrabbleTilesMemento"


export default class ScrabbleBoard {
    private spaces : Space[] = new Array()
    private oldPlayedTiles : Tile[] = new Array()
    private newPlayedTiles : Tile[]

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

        // Automatically accept active players previous played tiles
        if (this.turnPlayerId === this.playerIdForPlayedTiles && this.state.canCheckNewTiles())
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


    public canPlayTiles() {
        return this.state.canPlayTiles()
    }

    public playNewTiles(playerId : string, newTiles : Tile[]) {
        if (!newTiles || newTiles.length === 0)
            throw new Error("Cannot play without tiles.")

        if (playerId !== this.turnPlayerId)
            throw new Error("A waiting player has to wait his/hers turn before playing new tiles.")

        if (!this.state.canPlayTiles())
            throw new Error("The board has new tiles that the players must be allowed to challenge first.")

        if (this.state.canCheckNewTiles())
            this.acceptNewTiles()

        this.newPlayedTiles = JSON.parse(JSON.stringify(newTiles))

        log(`Player ${this.turnPlayerId} played ${(""+newTiles.map(tile => " "+tile)).trim()}.`)

        this.setState(new ScrabbleBoardBusyState(this))

        this.setNextPlayer()
    }


    public canCheckNewTiles() {
        return this.state.canCheckNewTiles()
    }

    public checkNewTiles(playerId : string) {
        if (!this.state.canCheckNewTiles())
            throw new Error("The board does not have any new tiles to be checked.")

        if (playerId === this.playerIdForPlayedTiles)
            throw new Error("The player cannot ask for his/hers own tiles to be checked.")

        log(`The new tiles belonging to ${this.playerIdForPlayedTiles} was challenged by ${playerId}.`)

        if (Math.random() < 0.5) {
            this.rollbackNewTiles()
        } else {
            this.acceptNewTiles()
        }
    }


    private acceptNewTiles() {
        if (!this.state.canCheckNewTiles())
            throw new Error("There is no new tiles to accept.")

        this.oldPlayedTiles.push(...this.newPlayedTiles)
        this.newPlayedTiles = null

        log(`The new tiles belonging to ${this.playerIdForPlayedTiles} was accepted.`)

        this.playerIdForPlayedTiles = null

        this.setState(new ScrabbleBoardReadyState(this))
    }

    private rollbackNewTiles() {
        if (!this.state.canCheckNewTiles())
            throw new Error("There is no new tiles to rollback.")

        this.newPlayedTiles = null

        log(`The new tiles belonging to ${this.playerIdForPlayedTiles} was rejected.`)

        this.setState(new ScrabbleBoardReadyState(this))
    }
     
     
    private setState(newState : AbstractScrabbleBoardState) {
        this.state = newState

        log(`(Board state: ${this.state.getDescription()}.)`)
    }


    public saveCurrentBoard() {
        return new PlayedScrabbleTilesMemento(this.newPlayedTiles, this.turnPlayerId)
    }

    public restorePreviousBoard() {
        this.oldPlayedTiles = 
    }
}