import User from "./User"
import { IPlayer } from "./Player"

export class UserToPlayerAdapter implements IPlayer {
    user : User

    constructor(user : User) {
        this.user = user

        this.setLevel(0)
        this.setScore(0)
    }

    public getNick() {
        return this.user.getName()
    }

    public getLevel() {
        return JSON.parse(this.user.getData()).level
    }
    
    public setLevel(level : number) {
        const data : any = JSON.parse(this.user.getData())
        data.level = level
        this.user.setData(JSON.stringify(data))
    }

    public getScore() {
        return JSON.parse(this.user.getData()).score
    }

    public setScore(score : number) {
        const data : any = JSON.parse(this.user.getData())
        data.score = score
        this.user.setData(JSON.stringify(data))
    }

    public toString() : string {
        return `${this.getNick()} is on level ${this.getLevel()} with score ${this.getScore()}.`
    }
}