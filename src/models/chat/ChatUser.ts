import { IChatRoom, ChatRoom } from "./ChatRoom"

export default class ChatUser {
    private nick : string
    private chatRoom : IChatRoom

    public constructor(nick : string) {
        this.nick = `${nick}`
    }

    public setChatRoom(chatRoom : IChatRoom) {
        this.chatRoom = chatRoom
    }

    public getNick() {
        return `${this.nick}`
    }

    public sendMessage(receiversNick : string[], message : string) {
        console.log(`${this.nick} sent "${message}"`)
        this.chatRoom.sendMessage(receiversNick, message)
    }

    public receiveMessage(message : string) {
        console.log(`${this.nick} received "${message}"`)
    }
}