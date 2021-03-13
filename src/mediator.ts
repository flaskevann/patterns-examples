
import run from "./clients/ChatClient"

// Source
const fs = require('fs')
const path = require("path")
const chatUserSrc = fs.readFileSync(path.resolve(__dirname, "./models/chat/ChatUser.ts"), "utf8")
const chatRoomSrc = fs.readFileSync(path.resolve(__dirname, "./models/chat/ChatRoom.ts"), "utf8")
const chatClient = fs.readFileSync(path.resolve(__dirname, "./clients/ChatClient.ts"), "utf8")


/*
    Models:
*/

console.log()
console.log()
console.log("MEDIATOR PATTERN:")
console.log("--------------------------------------------")
console.log()
console.log(chatUserSrc)
console.log()
console.log(chatRoomSrc)

/*
    Demo:
*/

console.log()
console.log()
console.log("EXAMPLE CLIENT AND OUTPUT:")
console.log("--------------------------------------------")
console.log()
console.log(chatClient.replace("export default ", ""))
console.log()
console.log("run():")
console.log()
run()
console.log()
