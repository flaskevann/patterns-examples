
import run from "./clients/MessagerClient"

// Source
const fs = require('fs')
const path = require("path")
const messagerSrc = fs.readFileSync(path.resolve(__dirname, "./models/messager/Messager.ts"), "utf8")
const messagerClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/MessagerClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("WRAPPER PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(messagerSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(messagerClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
