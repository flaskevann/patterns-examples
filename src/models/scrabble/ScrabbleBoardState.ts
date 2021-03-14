import ScrabbleBoard from "./ScrabbleBoard"

export abstract class AbstractScrabbleBoardState {
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

export class ScrabbleBoardReadyState extends AbstractScrabbleBoardState {

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
        return "Ready for new tiles to be played"
    }
}

export class ScrabbleBoardBusyState extends AbstractScrabbleBoardState {
    private timeLastPlay : number
    private playTimeout : number = 60 // forces pause after each tile play
                                      // to give players time to challenge    
    constructor(board : ScrabbleBoard) {
        super(board)

        this.timeLastPlay = Math.round(Date.now() / 1000)
    }

    canPlayTiles() {
        if (this.timeLastPlay + this.playTimeout < Math.round(Date.now() / 1000))
            return true
        else
            return false
    }

    canCheckTiles() {
        return true
    }

    getDescription() {
        return "Has one or more new tiles that needs to be accepted or rejected"
    }
}