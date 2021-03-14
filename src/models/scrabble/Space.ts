export enum SpaceType {
    BLANK,
    STAR,
    DL,
    DW,
    TL,
    TW
}

export class Space {
    private index : number
    private type : SpaceType

    public constructor(index : number, type : SpaceType) {
        this.index = index
        this.type = type
    }

    public getIndex() : number {
        return this.index
    }

    public getType() : SpaceType {
        return this.type
    }
}