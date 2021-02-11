export interface IPlayer {
    getNick() : string
    getLevel() : number
    setLevel(level : number) : void
    getScore() : number
    setScore(score : number) : void
    toString(): string
}

export class Player implements IPlayer {
    nick : string
    level : number
    score : number

    constructor(nick : string, level : number, score : number) {
        this.nick = nick
        this.level = level
        this.score = score
    }

    public getNick() : string {
        return `${this.nick}`
    }

    public getLevel() : number {
        return this.level
    }

    public setLevel(level : number) : void {
        this.level = level
    }

    public getScore() : number {
        return this.score
    }

    public setScore(score : number) : void {
        this.score = score
    }

    public toString() : string {
        return `${this.nick} is on level ${this.level} with score ${this.score}.`
    }
}