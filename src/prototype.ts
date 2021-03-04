
import run from "./clients/ComputerConfigurationClient"

// Source
const fs = require('fs')
const path = require("path")
const cloningSrc = fs.readFileSync(path.resolve(__dirname, "./models/generic/Cloning.ts"), "utf8")
const computerConfigurationSrc = fs.readFileSync(path.resolve(__dirname, "./models/configurations/ComputerConfiguration.ts"), "utf8")
const computerConfigurationRegisterSrc = fs.readFileSync(path.resolve(__dirname, "./models/configurations/ComputerConfigurationRegister.ts"), "utf8")
const computerConfigurationClientSrc = fs.readFileSync(path.resolve(__dirname, "./clients/ComputerConfigurationClient.ts"), "utf8")

/*
    Models:
*/

console.log()
console.log()
console.log("PROTOTYPE PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(cloningSrc)
console.log()
console.log(computerConfigurationRegisterSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(computerConfigurationClientSrc.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
