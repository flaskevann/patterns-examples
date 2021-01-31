
import run from "./clients/NewsletterClient"

// Source
const fs = require('fs')
const path = require("path")
const newsletterSubscriberSrc = fs.readFileSync(path.resolve(__dirname, "./models/newsletter/NewsletterSubscriber.ts"), "utf8")
const newsletterPublisherSrc = fs.readFileSync(path.resolve(__dirname, "./models/newsletter/NewsletterPublisher.ts"), "utf8")
const newsletterClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/NewsletterClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("OBSERVER PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(newsletterPublisherSrc)
console.log()
console.log(newsletterSubscriberSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(newsletterClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
