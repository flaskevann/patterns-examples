export class PlayedScrabbleTiles {
    private tiles : any // space number (key) => tile object (value)
    private playerId : string

    public constructor(playerId : string, tiles : any) {
        this.playerId = `${playerId}`
        this.tiles = Object.assign(tiles)
    }

    public getTiles() : any {
        return Object.assign(this.tiles)
    }

    public getPlayerId() : string {
        return `${this.playerId}`
    }

    public toString() : string {
        var word = ""
        Object.keys(this.tiles).map(spaceNumber => word += this.tiles[spaceNumber].getLetter())
        return word
    }
}

export class PlayedScrabbleTilesHistory { // Caretaker class for Memento objects
    private playedTiles : PlayedScrabbleTiles[] = new Array()

    public commit(playedTiles : PlayedScrabbleTiles) : void {
        this.playedTiles.push(Object.assign(playedTiles))
    }

    public rollback() : PlayedScrabbleTiles {
        if (this.playedTiles.length === 0)
            throw new Error("No previous played Scrabble tiles to rollback.")

        return this.playedTiles.pop()
    }

    public toString() : string {
        var words = ""
        this.playedTiles.forEach(playedTiles => words += playedTiles.toString()+" ")
        return words.trim()
    }
}