
export interface IMoney {
    add(amount : number) : void
    subtract(amount : number) : number
    getAmount() : number
}

export class Cash implements IMoney {
    private amount : number

    public constructor(amount : number) {
        this.amount = amount

        console.log(`Have $ ${this.amount} in cash.`)
    }

    public add(amount : number) : void {
        if (amount <= 0) throw new Error("Cannot add zero amount or a negative amount.")

        this.amount += amount

        console.log(`Got some more cash, has $ ${this.amount} in total.`)
    }

    public subtract(amount : number) : number {
        if (amount <= 0) throw new Error("Please use a positive number to describe the amount.")
        if (amount > this.amount) throw new Error("Not enough cash for this transaction.")

        this.amount -= amount

        console.log(`Used some cash, has $ ${this.amount} left.`)

        return amount
    }

    getAmount() : number {
        return this.amount
    }
}

export class BankAccount implements IMoney { // carbon copy of Cash really
    private amount : number

    public constructor(amount : number) {
        this.amount = amount

        console.log(`Have $ ${this.amount} in the bank.`)
    }

    public add(amount : number) : void {
        if (amount <= 0) throw new Error("Cannot add zero amount or a negative amount.")

        this.amount += amount

        console.log(`Got some more money in the bank, has $ ${this.amount} in total.`)
    }

    public subtract(amount : number) : number {
        if (amount <= 0) throw new Error("Please use a positive number to describe the amount.")
        if (amount > this.amount) throw new Error("Not enough funds for this transaction.")

        this.amount -= amount

        console.log(`Used some money from the bank, has $ ${this.amount} left.`)

        return amount
    }

    getAmount() : number {
        return this.amount
    }
}