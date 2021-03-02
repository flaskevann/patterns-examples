
import run from "./clients/ComputerClient"

// Source
const fs = require('fs')
const path = require("path")
const cloningSrc = fs.readFileSync(path.resolve(__dirname, "./models/generic/Cloning.ts"), "utf8")
const computerSrc = fs.readFileSync(path.resolve(__dirname, "./models/computer/Computer.ts"), "utf8")
const prototypeRegisterSrc = fs.readFileSync(path.resolve(__dirname, "./models/Computer/Prototypes.ts"), "utf8")
const computerClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/ComputerClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("PROTOTYPE PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(cloningSrc)
console.log()
console.log(computerSrc)
console.log()
console.log(prototypeRegisterSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(computerClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
