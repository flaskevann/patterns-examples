
import run from "./clients/IteratorClient"

// Source
const fs = require('fs')
const path = require("path")
const iteratorInterfaceSrc = fs.readFileSync(path.resolve(__dirname, "./models/generic/FlexibleIterator.ts"), "utf8")
const containerAndIteratorSrc = fs.readFileSync(path.resolve(__dirname, "./models/generic/Container.ts"), "utf8")
const iteratorClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/IteratorClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("ITERATOR PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(iteratorInterfaceSrc)
console.log()
console.log()
console.log("ITERATOR IMPLEMENTATION:")
console.log("--------------------------------------------")
console.log()
console.log(containerAndIteratorSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(iteratorClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
