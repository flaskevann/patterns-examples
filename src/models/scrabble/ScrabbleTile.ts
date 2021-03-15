export class ScrabbleTile {
    private letter : string
    private value : number

    public constructor(letter : string, value : number) {
        this.letter = `${letter}`
        this.value = value
    }

    public getLetter() {
        return `${this.letter}`
    }

    public getValue() {
        return this.value
    }
}