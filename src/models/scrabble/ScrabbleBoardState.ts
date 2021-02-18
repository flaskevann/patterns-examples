import ScrabbleBoard from "./ScrabbleBoard"

export abstract class ScrabbleBoardState {
    private board : ScrabbleBoard // context for states

    public constructor(board : ScrabbleBoard) {
        this.board = board
    }

    protected getBoard() {
        return this.board
    }

    abstract canPlayTiles() : boolean
    abstract canCheckTiles() : boolean

    abstract getDescription() : string
}

export class ScrabbleBoardReadyState extends ScrabbleBoardState {

    constructor(board : ScrabbleBoard) {
        super(board)
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

export class ScrabbleBoardBusyState extends ScrabbleBoardState {
    private timeLastPlay : number
    
    constructor(board : ScrabbleBoard) {
        super(board)

        this.timeLastPlay = Math.round(Date.now() / 1000)
    }

    canPlayTiles() {
        if (this.timeLastPlay + this.getBoard().getPlayTimeout() < Math.round(Date.now() / 1000)) return true
        else return false
    }

    canCheckTiles() {
        return true
    }

    getDescription() {
        return "Has new tiles that needs to be accepted or rejected"
    }
}