export interface IMessager {
    send(message : string) : void
}

export class EmailMessagerLegacy implements IMessager {
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
    private anotherNotifier : IMessager
    private receivers : string[] // cellphone numbers

    public constructor(anotherNotifier : IMessager, receivers : string[]) {
        this.anotherNotifier = Object.create(anotherNotifier)
        this.receivers = JSON.parse(JSON.stringify(receivers))
    }

    public send(message : string) {
        this.anotherNotifier.send(message)

        this.receivers.forEach(receiver => {
            console.log(`Sent SMS "${message}" to ${receiver}.`)
        })
    }
}

export class FacebookMessagerWrapper implements IMessager {
    private anotherNotifier : IMessager
    private receivers : string[] // Facebook ids

    public constructor(anotherNotifier : IMessager, receivers : string[]) {
        this.anotherNotifier = Object.create(anotherNotifier)
        this.receivers = JSON.parse(JSON.stringify(receivers))
    }

    public send(message : string) {
        this.anotherNotifier.send(message)

        this.receivers.forEach(receiver => {
            console.log(`Sent Facebook message "${message}" to ${receiver}.`)
        })
    }
}