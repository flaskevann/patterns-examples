
import run from "./models/shape/ShapeClient"

// Source
const fs = require('fs')
const path = require("path")
const shapeFacadeSrc = fs.readFileSync(path.resolve(__dirname, "./models/shape/Shape.ts"), "utf8")
const shapeFactorySrc = fs.readFileSync(path.resolve(__dirname, "./models/shape/ShapeFactory.ts"), "utf8")
const shapeClientSrc = fs.readFileSync(path.resolve(__dirname, "./models/shape/ShapeClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("FACADE PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(shapeFacadeSrc)

console.log()
console.log()
console.log("FACTORY PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(shapeFactorySrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(shapeClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()