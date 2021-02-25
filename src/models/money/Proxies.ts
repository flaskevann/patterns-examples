import { IMoney, BankAccount } from "./Money"

export class DebitCard implements IMoney {
    private bankAccount : BankAccount

    public constructor(bankAccount : BankAccount) {
        if (!bankAccount) throw new Error("A debit card must be connected to a bank account.")

        this.bankAccount = bankAccount

        console.log(`Have $ ${this.bankAccount.getAmount()} accessible wih debit card.`)
    }

    public add(amount : number) : void {
        this.bankAccount.add(amount)

        console.log(`  Received some money using debit card, has $ ${this.bankAccount.getAmount()} in total.`)
    }

    public subtract(amount : number) : number {
        this.bankAccount.subtract(amount)

        console.log(`  Used some money with the debit card, has $ ${this.bankAccount.getAmount()} left.`)

        return amount
    }

    public getAmount() : number {
        return this.bankAccount.getAmount()
    }
}

export class CreditCard implements IMoney {
    private bankAccount : BankAccount
    private limit : number
    private debt : number

    public constructor(bankAccount : BankAccount, limit : number, debt : number) {
        if (limit <= 0) throw new Error("Please use a positive number when describing the limit.")
        if (debt < 0) throw new Error("Please use zero or a positive number when describing the debt.")
        if (debt > limit) throw new Error("Debt is larger than the limit.")

        if (bankAccount) this.bankAccount = bankAccount
        this.limit = limit
        this.debt = debt

        console.log(`Have $ ${this.getAmount()} accessible wih credit card.`)
    }

    public add(debt : number) : void {
        if (debt <= 0) throw new Error("Please use a positive number when describing new debt.")
        if (this.debt+debt > this.limit) throw new Error("Not enough funds since the limit is surpassed.")

        this.debt += debt

        console.log(`Added some debt using the credit card, has $ ${this.getDebt()} in debt and $ ${this.getAmount()} left for spending.`)
    }

    public subtract(payment : number) : number {
        if (!this.bankAccount) throw new Error("Cannot make payment using bank account because bank account is not set up yet.")
        if (payment <= 0) throw new Error("Please use a positive number when describing new payment.")
        if (payment > this.debt) throw new Error("Payment is bigger than current debt.")

        this.bankAccount.subtract(payment) // error if it fails
        this.debt -= payment

        console.log(`Made $ ${payment} payment on debt for the credit card, has $ ${this.getDebt()} in debt and $ ${this.getAmount()} left for spending.`)

        return payment
    }

    public getDebt() : number {
        return this.debt
    }

    public getAmount() : number {
        return this.limit - this.debt
    }
}