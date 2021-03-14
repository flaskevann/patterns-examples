import { SpaceType, Space } from "./Space"

export default class Tile {
    private letter : string
    private value : number
    private _isBlank : boolean
    private _isLocked : boolean

    public constructor(letter : string, value : number, isLocked : boolean) {
        this.letter = `${letter}`
        this.value = value

        this._isBlank = !letter || letter === "" || letter === " "
        if (this._isBlank) this.value = 0

        this._isLocked = isLocked
    }

    public getLetter() {
        return `${this.letter}`
    }

    public getValue() {
        return this.value
    }

    public isBlank() {
        return this.isBlank
    }

    public isLocked() {
        return this.isLocked
    }
}