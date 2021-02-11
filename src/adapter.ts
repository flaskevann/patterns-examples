
import run from "./clients/PlayerClient"

// Source
const fs = require('fs')
const path = require("path")
const adapterForPlayerSrc = fs.readFileSync(path.resolve(__dirname, "./models/player/Adapters.ts"), "utf8")
const playerClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/PlayerClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("ADAPTER PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(adapterForPlayerSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(playerClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
