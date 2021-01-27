export default interface ILogger {
    setup(filePath : string) : void
    logToFile(text : string) : void
    logToConsole(text : string) : void
}