export interface IMessager {
    send(message : string) : void
}

export class EmailMessager implements IMessager {
    private receivers : string[] // email addresses

    public constructor(receivers : string[]) {
        this.receivers = JSON.parse(JSON.stringify(receivers))
    }

    public send(message : string) {
        this.receivers.forEach(receiver => {
            console.log(`Sent email "${message}" to ${receiver}.`)
        })
    }
}

export class SMSMessagerWrapper implements IMessager {
    private anotherMessager : IMessager
    private receivers : string[] // cellphone numbers

    public constructor(anotherMessager : IMessager, receivers : string[]) {
        this.anotherMessager = Object.create(anotherMessager)
        this.receivers = JSON.parse(JSON.stringify(receivers))
    }

    public send(message : string) {
        this.anotherMessager.send(message)

        this.receivers.forEach(receiver => {
            console.log(`Sent SMS "${message}" to ${receiver}.`)
        })
    }
}

export class FacebookMessagerWrapper implements IMessager {
    private anotherMessager : IMessager
    private receivers : string[] // Facebook ids

    public constructor(anotherMessager : IMessager, receivers : string[]) {
        this.anotherMessager = Object.create(anotherMessager)
        this.receivers = JSON.parse(JSON.stringify(receivers))
    }

    public send(message : string) {
        this.anotherMessager.send(message)

        this.receivers.forEach(receiver => {
            console.log(`Sent Facebook message "${message}" to ${receiver}.`)
        })
    }
}