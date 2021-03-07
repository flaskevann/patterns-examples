
import run from "./clients/ComponentClient"

// Source
const fs = require('fs')
const path = require("path")
const componentSrc = fs.readFileSync(path.resolve(__dirname, "./models/generic/Component.ts"), "utf8")
const componentClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/ComponentClient.ts"), "utf8")


/*
    Models:
*/

console.log()
console.log()
console.log("COMPOSITE PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(componentSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(componentClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
