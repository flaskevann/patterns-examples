import { INewsletter, Newsletter } from "../models/newsletter/Newsletter"
import { NewsletterSubscriber } from "../models/newsletter/NewsletterSubscriber"
import { INewsletterPublisher, NewsletterPublisher } from "../models/newsletter/NewsletterPublisher"

export default function run() {

    // A new electronic store opens its doors and wants to welcome customers
    const bestBuyNewsletter : INewsletter = new Newsletter("We are open for business! Please come by!", [])
    const bestBuyNewsletterPublisher : INewsletterPublisher = new NewsletterPublisher("BestBuy", bestBuyNewsletter)

    // Three customers immediately visit and sign up for the newsletter
    bestBuyNewsletterPublisher.subscribe(new NewsletterSubscriber("Joe", ["apple", "music"]))
    bestBuyNewsletterPublisher.subscribe(new NewsletterSubscriber("Jill", ["kitchen", "apple"]))
    bestBuyNewsletterPublisher.subscribe(new NewsletterSubscriber("Jack", ["linux"]))

    // Time passes by
    bestBuyNewsletterPublisher.sendNewsletter(new Newsletter("Newest Apple iPhone received!", ["apple", "iphone"]))
    bestBuyNewsletterPublisher.sendNewsletter(new Newsletter("New XL coffee machine from Nespresso!", ["kitchen", "coffee", "food", "drink"]))    
}