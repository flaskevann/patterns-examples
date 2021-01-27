import ILogger from "./ILogger"
import Logger from "./Logger"

export default function run() {

    // .. some kind of client code before

    const filePath : string = `C:\log.txt`
    // Logger.getInstance().setup(filePath)
    
    const logger1 : ILogger = Logger.getInstance()
    const logger2 : ILogger = Logger.getInstance()
    
    logger1.logToConsole("First log entry goes to console")
    logger2.logToConsole("Second log entry goes to console")
    // l2.logToFile("Third log entry is going to trigger an error")

    console.log("logger1 and logger2 is the same object: " + (logger1 === logger2))
    
    // .. some kind of client code after
}
