
import run from "./clients/NavigatorClient"

// Source
const fs = require('fs')
const path = require("path")
const routeStrategySrc = fs.readFileSync(path.resolve(__dirname, "./models/navigation/RouteStrategy.ts"), "utf8")
const navigatorClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/NavigatorClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("ROUTE STRATEGY:")
console.log("--------------------------------------------")
console.log()
console.log(routeStrategySrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(navigatorClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
