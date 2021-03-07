
export interface ILogger {
    setup(consoleLogFunc : any, fileLogFunc : any, filePath : string) : void
    logToFile(text : string) : void
    logToConsole(text : string) : void
}

export class Logger implements ILogger {

    private static instance : ILogger

    private static consoleLogFunc : any

    private static fileLogFunc : any
    private static filePath : string

    private constructor() {} // private constructor blocks instantiation from a client

    public static getInstance() : Logger {
        if (!Logger.instance)
            Logger.instance = new Logger()

        return Logger.instance
    }

    public setup(consoleLogFunc : any, fileLogFunc : any, filePath : string) : void {
        Logger.consoleLogFunc = consoleLogFunc
        Logger.fileLogFunc = fileLogFunc
        Logger.filePath = filePath
    }

    public logToFile(text : string) : void {
        if (!Logger.fileLogFunc || !Logger.filePath)
            throw new Error(`Can't log to file because Logger has been configured without file logging function or file path.`)

        Logger.fileLogFunc(Logger.filePath, text)
    }

    public logToConsole(text : string) : void {
        if (!Logger.consoleLogFunc)
            throw new Error(`Can't log to console because Logger has been configured without console logging function.`)

        Logger.consoleLogFunc(text)
    }
}