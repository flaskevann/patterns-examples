
import run from "./clients/ScrabbleClient"

// Source
const fs = require('fs')
const path = require("path")
const scrabbleBoardSrc = fs.readFileSync(path.resolve(__dirname, "./models/scrabble/ScrabbleBoard.ts"), "utf8")
const scrabbleBoardStateSrc = fs.readFileSync(path.resolve(__dirname, "./models/scrabble/ScrabbleBoardState.ts"), "utf8")
const scrabbleClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/ScrabbleClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("STATE PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(scrabbleBoardStateSrc)

console.log()
console.log()
console.log("STATE IN USE:")
console.log("--------------------------------------------")
console.log()
console.log(scrabbleBoardSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(scrabbleClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
