import ScrabbleBoard from "./ScrabbleBoard"

export interface IScrabbleBoardState {
    canPlayTiles() : boolean
    canCheckTiles() : boolean

    getDescription() : string
}

export class ScrabbleBoardReadyState implements IScrabbleBoardState {
    private board : ScrabbleBoard // context

    constructor(board : ScrabbleBoard) {
        this.board = board
    }

    canPlayTiles() {
        return true
    }

    canCheckTiles() {
        return false
    }

    getDescription() {
        return "Ready for new tiles"
    }
}

export class ScrabbleBoardBusyState implements IScrabbleBoardState {
    private board : ScrabbleBoard // context
    private timeCreated : number

    constructor(board : ScrabbleBoard) {
        this.board = board
        this.timeCreated = Math.round(Date.now() / 1000)
    }

    canPlayTiles() {
        if (this.timeCreated + 10 < Math.round(Date.now() / 1000)) return true
        else return false
    }

    canCheckTiles() {
        return true
    }

    getDescription() {
        return "Has new tiles that needs to be accepted or rejected"
    }
}