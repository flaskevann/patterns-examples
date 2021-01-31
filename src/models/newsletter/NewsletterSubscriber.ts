import { INewsletter } from "./Newsletter"

export interface INewsletterSubscriber {
    getName() : string
    getPreferences() : string[]
    update(newNewsletter : INewsletter) : void
}

export class NewsletterSubscriber implements INewsletterSubscriber {
    private name : string
    private preferences : string[]

    public constructor(name : string, preferences : string[]) {
        this.name = `${name}`
        this.preferences = JSON.parse(JSON.stringify(preferences))
    }

    public getName() {
        return `${this.name}`
    }

    public getPreferences() : string[] {
        return JSON.parse(JSON.stringify(this.preferences))
    }

    public update(newNewsletter : INewsletter) {
        console.log(`'${this.name}' received newsletter: ${newNewsletter}`)
    }
}