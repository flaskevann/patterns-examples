import { IChatRoom, ChatRoom } from "../models/chat/ChatRoom"
import ChatUser from "../models/chat/ChatUser"

export default function run() {

    // .. some kind of client code before
    
    const user1 = new ChatUser("Bob")
    const user2 = new ChatUser("Alice")
    const user3 = new ChatUser("Clarice")
    const user4 = new ChatUser("Pete")
    
    const chatRoom : IChatRoom = new ChatRoom([user1, user2, user3, user4])
    
    user4.sendMessage(["Bob", "Alice"], "Hello friends!")
    user4.sendMessage(null, "Hello everyone!")
            
    // .. some kind of client code after
}