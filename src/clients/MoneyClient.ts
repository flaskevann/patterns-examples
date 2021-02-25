import { IMoney,
         Cash,
         BankAccount } from "../models/money/Money"
import { DebitCard,
         CreditCard } from "../models/Money/Proxies"

export default function run() {

    const wallet : IMoney = new Cash(200)
    wallet.subtract(11) // got some snacks
    wallet.add(20) // got allowance
    const cash : number = wallet.subtract(wallet.getAmount())
    
    const bankAccount : IMoney = new BankAccount(cash)
    bankAccount.add(2000)
    bankAccount.subtract(1000)
    
    const debitCard : IMoney = new DebitCard(bankAccount as BankAccount)
    debitCard.subtract(150)
    debitCard.add(90)
    
    const creditCard : IMoney = new CreditCard(bankAccount as BankAccount, 1000, 0)
    creditCard.add(500)
    creditCard.subtract(200)
}
