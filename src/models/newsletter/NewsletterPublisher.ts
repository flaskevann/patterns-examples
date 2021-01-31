
import { INewsletter, Newsletter } from "./Newsletter"
import { INewsletterSubscriber } from "./NewsletterSubscriber"

export interface INewsletterPublisher {
    subscribe(newSubscriber : INewsletterSubscriber) : void
    unsubscribe(existingSubscriber : INewsletterSubscriber) : void
    sendNewsletter(newNewsletter : INewsletter) : void
}

export class NewsletterPublisher implements INewsletterPublisher {
    private name : string
    private latestNewsletter : INewsletter
    private subscribers : INewsletterSubscriber[] = new Array()

    public constructor(name : string, openingNewsletter : INewsletter) {
        this.name = `${name}`
        this.latestNewsletter = new Newsletter(openingNewsletter.getText(), openingNewsletter.getKeywords())

        console.log(`'${this.name}' started publishing newsletters: ${openingNewsletter}`)
    }

    public subscribe(newSubscriber : INewsletterSubscriber) {
        for (var s = 0; s < this.subscribers.length; s++) {
            if (this.subscribers[s] === newSubscriber) {
                throw new Error("Subscriber already exists.")
            }
        }

        console.log(`'${newSubscriber.getName()}' added as subscriber.`)

        this.subscribers.push(newSubscriber);        
        newSubscriber.update(this.latestNewsletter)
    }

    public unsubscribe(existingSubscriber : INewsletterSubscriber) {
        for (var s = 0; s < this.subscribers.length; s++) {
            if (this.subscribers[s] === existingSubscriber) {
                console.log(`'${this.subscribers[s].getName()}' removed as subscriber.`)

                this.subscribers.splice(s, 1)
                return
            }
        }

        throw new Error("Subscriber not found.")
    }

    public sendNewsletter(newNewsletter : INewsletter) {
        console.log(`'${this.name}' is publishing another newsletter: ${newNewsletter}`)

        this.latestNewsletter = new Newsletter(newNewsletter.getText(), newNewsletter.getKeywords())

        for (var s = 0; s < this.subscribers.length; s++) {
            var subscriber = this.subscribers[s]

            for (var p = 0; p < subscriber.getPreferences().length; p++) {
                var preference = subscriber.getPreferences()[p]

                if (this.latestNewsletter.getKeywords().includes(preference)) {
                    subscriber.update(this.latestNewsletter)
                    break
                }
            }
        }
    }
}
