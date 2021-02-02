
import run from "./clients/HouseBuilderClient"

// Source
const fs = require('fs')
const path = require("path")
const homeBuilderSrc = fs.readFileSync(path.resolve(__dirname, "./models/housebuilder/HouseBuilder.ts"), "utf8")
const homeBuilderClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/HouseBuilderClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("BUILDER PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(homeBuilderSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(homeBuilderClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
