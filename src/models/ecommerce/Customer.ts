export abstract class AbstractCustomer {
    private name : string

    public constructor(name : string) {
        this.name = name
    }

    public getName() {
        return this.name
    }
}

export class RegisteredCustomer extends AbstractCustomer {
    private address : string[]

    constructor(name : string, address : string[]) {
        super(name)
        this.address = JSON.parse(JSON.stringify(address))
    }

    public getAddress() {
        return JSON.parse(JSON.stringify(this.address))
    }
}

export class VIPCustomer extends RegisteredCustomer {
    private status : string

    constructor(name : string, address : string[], status : string) {
        super(name, address)
        this.status = `${status}` // gold, silver, bronze, ..
    }

    public getStatus() {
        return `${this.status}`
    }
}

export class GuestCustomer extends AbstractCustomer {
 
    public constructor() {
        super("Anonymous Guest")
    }
}