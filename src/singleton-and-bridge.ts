
import run from "./clients/LoggerClient"

// Source
const fs = require('fs')
const path = require("path")
const loggerSingletonWithBridgeSrc = fs.readFileSync(path.resolve(__dirname, "./models/logging/Logger.ts"), "utf8")
const loggerClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/LoggerClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("SINGLETON AND BRIDGE PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(loggerSingletonWithBridgeSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(loggerClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
