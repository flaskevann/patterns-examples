
import run from "./clients/CompositeComponentClient"

// Source
const fs = require('fs')
const path = require("path")
const compositeComponentSrc = fs.readFileSync(path.resolve(__dirname, "./models/generic/CompositeComponent.ts"), "utf8")
const compositeComponentClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/CompositeComponentClient.ts"), "utf8")


/*
    Models:
*/

console.log()
console.log()
console.log("COMPOSITE PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(compositeComponentSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(compositeComponentClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
