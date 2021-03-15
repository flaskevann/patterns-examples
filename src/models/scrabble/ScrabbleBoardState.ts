import ScrabbleBoard from "./ScrabbleBoard"

export abstract class AbstractScrabbleBoardState {
    private board : ScrabbleBoard // context for states

    public constructor(board : ScrabbleBoard) {
        this.board = board
    }

    protected getBoard() {
        return this.board
    }

    abstract canPlayNewTiles() : boolean
    abstract canCheckNewTiles() : boolean

    abstract getDescription() : string
}

export class ScrabbleBoardReadyState extends AbstractScrabbleBoardState {

    constructor(board : ScrabbleBoard) {
        super(board)
    }

    canPlayNewTiles() {
        return true
    }

    canCheckNewTiles() {
        return false
    }

    getDescription() {
        return "Ready for new tiles to be played"
    }
}

export class ScrabbleBoardBusyState extends AbstractScrabbleBoardState {
    private timeLastPlay : number
    private playTimeout : number = 10 // forces pause after each tile play
                                      // to give players time to challenge    
    constructor(board : ScrabbleBoard) {
        super(board)

        this.timeLastPlay = Math.round(Date.now() / 1000)
    }

    canPlayNewTiles() {
        if (this.timeLastPlay + this.playTimeout < Math.round(Date.now() / 1000))
            return true
        else
            return false
    }

    canCheckNewTiles() {
        return true
    }

    getDescription() {
        return "Has one or more new tiles that needs to be accepted or rejected"
    }
}