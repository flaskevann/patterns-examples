import Tile from "./Tile"

export class PlayedScrabbleTiles {
    private tiles : object // space number (key) => tile object (value)
    private playerId : string

    public constructor(tiles : any, playerId : string) {
        this.tiles = Object.assign(tiles)
        this.playerId = `${playerId}`
    }

    public getTiles() : object {
        return Object.assign(this.tiles)
    }

    public getPlayerId() {
        return `${this.playerId}`
    }

    public toString() {
        return Object.values(this.tiles).forEach((value : Tile) => value.getLetter())
    }
}

export class PlayedScrabbleTilesHistory { // Caretaker class for Memento objects
    private playedScrabbleTiles : PlayedScrabbleTiles[] = new Array()

    public commit(playedTiles : PlayedScrabbleTiles) : void {
        this.playedScrabbleTiles.push(Object.assign(playedTiles))
    }

    public rollback() : PlayedScrabbleTiles {
        if (this.playedScrabbleTiles.length === 0)
            throw new Error("No previous played Scrabble tiles to rollback.")

        return this.playedScrabbleTiles.pop()
    }
}