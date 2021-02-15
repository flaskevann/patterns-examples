import { log } from "../../tools/logging"

import { IScrabbleBoardState, ScrabbleBoardReadyState, ScrabbleBoardBusyState } from "./ScrabbleBoardState"

export default class ScrabbleBoard {
    private tiles : string[] = new Array()
    private newTiles : string[]

    private players : string[] // player ids
    private activePlayerId : string
    private playerIdForPlayedTiles : string

    private state : IScrabbleBoardState

    constructor(players : string[]) {
        if (!players || players.length === 1 || players.length > 4)
            throw new Error("Game needs 2-4 players.")

        this.state = new ScrabbleBoardReadyState(this)
        this.players = JSON.parse(JSON.stringify(players))

        log(`Board with ${players.length} players created.`)
        
        this.setNextPlayer()
    }

    private setNextPlayer() {

        // Find next player in list
        if (this.activePlayerId) {
            for (var p = 0; p < this.players.length; p++) {
                var playerId = this.players[p]

                if (this.activePlayerId === playerId) {
    
                    if (p === this.players.length-1) this.activePlayerId = `${this.players[0]}`
                    else this.activePlayerId = `${this.players[p+1]}`
    
                    break
                }
            }
        } else {
            this.activePlayerId = `${this.players[0]}`
        }

        log(`Player ${this.activePlayerId} is now playing.`)

        // Automatically accept active players previous played tiles
        if (this.activePlayerId === this.playerIdForPlayedTiles && this.state.canCheckTiles())
            this.acceptNewTiles()
    }
    public skipTurn(playerId : string) {
        if (this.activePlayerId !== playerId)
            throw new Error("A waiting player can not skip a turn.")

        log(`Player ${this.activePlayerId} is skipping his/hers turn.`)

        this.setNextPlayer()
    }

    public exchangeTiles(playerId : string, tiles : string[]) {
        if (playerId !== this.activePlayerId)
            throw new Error("A waiting player has to wait his/hers turn before exchanging tiles.")

        if (!tiles || tiles.length === 0)
            throw new Error("Cannot exchange zero amount of tiles.")

        log(`Player ${playerId} exchanged some tiles`)

        this.setNextPlayer()
    }

    public canPlayTiles() {
        return this.state.canPlayTiles()
    }
    public playTiles(playerId : string, newTiles : string[]) {
        if (!newTiles || newTiles.length === 0)
            throw new Error("Cannot play without tiles.")

        if (playerId !== this.activePlayerId)
            throw new Error("A waiting player has to wait his/hers turn before playing new tiles.")

        if (!this.state.canPlayTiles())
            throw new Error("The board has new tiles that all players must be allowed to challenge first.")

        if (this.state.canCheckTiles())
            this.acceptNewTiles()

        this.newTiles = JSON.parse(JSON.stringify(newTiles))
        this.playerIdForPlayedTiles = `${this.activePlayerId}`

        log(`Player ${this.activePlayerId} played ${(""+newTiles.map(tile => " "+tile)).trim()}.`)

        this.setState(new ScrabbleBoardBusyState(this))

        this.setNextPlayer()
    }
    public canCheckTiles() {
        return this.state.canCheckTiles()
    }
    public checkTiles(playerId : string) {
        if (!this.state.canCheckTiles())
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
        if (!this.state.canCheckTiles())
            throw new Error("There is no new tiles to accept.")

        this.tiles.push(...this.newTiles)
        this.newTiles = null

        log(`The new tiles belonging to ${this.playerIdForPlayedTiles} was accepted.`)

        this.playerIdForPlayedTiles = null

        this.setState(new ScrabbleBoardReadyState(this))
    }
    private rollbackNewTiles() {
        if (!this.state.canCheckTiles())
            throw new Error("There is no new tiles to rollback.")

        this.newTiles = null

        log(`The new tiles belonging to ${this.playerIdForPlayedTiles} was rejected.`)

        this.playerIdForPlayedTiles = null

        this.setState(new ScrabbleBoardReadyState(this))
    }

    private setState(newState : IScrabbleBoardState) {
        this.state = newState

        log(`(Board state: ${this.state.getDescription()}.)`)
    }
}