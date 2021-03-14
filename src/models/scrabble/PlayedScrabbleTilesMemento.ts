import Tile from "./Tile"

export default class PlayedScrabbleTilesMemento {
    private tiles : {} // space number (key) => tile object (value)
    private playerId : string

    public constructor(tiles : Tile[], playerId : string) {
        this.tiles = Object.assign(tiles)
        this.playerId = `${playerId}`
    }

    public getTiles() {
        return Object.assign(this.tiles)
    }

    public getPlayerId() {
        return `${this.playerId}`
    }
}