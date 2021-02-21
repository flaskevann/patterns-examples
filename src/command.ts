
import run from "./clients/WorkClient"

// Source
const fs = require('fs')
const path = require("path")
const workSrc = fs.readFileSync(path.resolve(__dirname, "./models/work/Work.ts"), "utf8")
const workClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/WorkClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("COMMAND PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(workSrc)
console.log()

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(workClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
