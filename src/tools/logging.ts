export function log(message : string) {
    const date : Date = new Date()
    const hours = date.getHours() >= 10 ? date.getHours() : "0"+date.getHours()
    const minutes = date.getMinutes() >= 10 ? date.getMinutes() : "0"+date.getMinutes()
    const seconds = date.getSeconds() >= 10 ? date.getSeconds() : "0"+date.getSeconds()

    console.log(`[${hours}:${minutes}:${seconds}] ${message}`)
}