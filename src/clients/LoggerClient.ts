
import { ILogger, Logger } from "../models/logging/Logger"

const fs = require('fs')
const path = require("path")

export default function run() {

    // .. some kind of client code before

    const consoleLoggingFunc = console.log
    const fileLoggingFunc = (filePath : string, text : string) => fs.writeFileSync(filePath, text, "utf8")
    const filePath = path.resolve(__dirname, "./LoggerClientOutput.txt")
    
    Logger.getInstance().setup(consoleLoggingFunc, fileLoggingFunc, filePath)
 
    
    const logger1 : ILogger = Logger.getInstance()
    const logger2 : ILogger = Logger.getInstance()
    
    logger1.logToConsole("First log entry goes to console")
    logger2.logToConsole("Second log entry goes to console")
    logger2.logToFile("Third log entry goes to file")

    console.log(`logger1 and logger2 is the same object: ${logger1 === logger2}`)
    
    // .. some kind of client code after

    // Clean up:
    fs.unlink(filePath, () => {})
}
