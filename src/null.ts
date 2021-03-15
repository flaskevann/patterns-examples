
import run from "./clients/CustomerClient"

// Source
const fs = require('fs')
const path = require("path")
const customerSrc = fs.readFileSync(path.resolve(__dirname, "./models/ecommerce/Customer.ts"), "utf8")
const customerClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/CustomerClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("NULL PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(customerSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(customerClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
