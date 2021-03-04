
import run from "./clients/MoneyClient"

// Source
const fs = require('fs')
const path = require("path")
const moneySrc = fs.readFileSync(path.resolve(__dirname, "./models/money/Money.ts"), "utf8")
const moneyProxiesSrc = fs.readFileSync(path.resolve(__dirname, "./models/money/MoneyProxies.ts"), "utf8")
const moneyClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/MoneyClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("PROXY PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(moneyProxiesSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(moneyClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
