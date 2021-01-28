const fs = require('fs')

export interface ILogger {
    setup(filePath : string) : void
    logToFile(text : string) : void
    logToConsole(text : string) : void
}

export class Logger implements ILogger {

    private static instance : ILogger
    private static filePath : string

    private constructor() {} // private constructor blocks instantiation from a client

    public static getInstance() : Logger {
        if (!Logger.instance)
            Logger.instance = new Logger()

        return Logger.instance
    }

    public setup(filePath : string) : void {
        Logger.filePath = filePath
    }

    public logToFile(text : string) : void {
        if (!Logger.filePath)
            throw new Error(`Can't log to file because Logger has been configured without a file path.`)

        fs.writeFileSync(Logger.filePath, text, "utf8")
    }

    public logToConsole(text : string) : void {
        console.log(text)
    }
}