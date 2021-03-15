import { AbstractCustomer,
         RegisteredCustomer,
         VIPCustomer,
         GuestCustomer } from "../models/ecommerce/Customer"


export default function run() {

    // .. some kind of client code before
        
    // The usual repetitive checking for null:
    const WelcomeCustomerOld = (customer : AbstractCustomer) => {
        if (customer)
            console.log(`Welcome, ${customer.getName()}`)
        else
            console.log(`Welcome, Anonymous Guest`)
    }    
    WelcomeCustomerOld(new RegisteredCustomer("Olaf Sand", ["Nøysomheten", "7224 Melhus"]))
    WelcomeCustomerOld(null)
    
    console.log()

    // And now use of null object (instance of GuestCustomer) instead:
    const WelcomeCustomerNew = (customer : AbstractCustomer) => {
        console.log(`Welcome, ${customer.getName()}`) // no null checking! wohoo!
    } 
    WelcomeCustomerNew(new RegisteredCustomer("Olaf Sand", ["Nøysomheten", "7224 Melhus"]))
    WelcomeCustomerNew(new GuestCustomer())
                
    // .. some kind of client code after
}