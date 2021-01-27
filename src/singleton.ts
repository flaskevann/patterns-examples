
import run from "./models/logger/LoggerClient"

// Source
const fs = require('fs')
const path = require("path")
const loggerInterfaceSrc = fs.readFileSync(path.resolve(__dirname, "./models/logger/ILogger.ts"), "utf8")
const loggerSingletonSrc = fs.readFileSync(path.resolve(__dirname, "./models/logger/Logger.ts"), "utf8")
const loggerClientSrc = fs.readFileSync(path.resolve(__dirname, "./models/logger/LoggerClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("INTERFACE FOR SINGLETON:")
console.log("--------------------------------------------")
console.log()
console.log(loggerInterfaceSrc)

console.log()
console.log()
console.log("SINGLETON PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(loggerSingletonSrc)

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
