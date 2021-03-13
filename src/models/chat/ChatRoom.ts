import ChatUser from "./ChatUser"

export interface IChatRoom {
    sendMessage(receiversNick : string[], message : string) : void
}

export class ChatRoom implements IChatRoom {
    private users : ChatUser[]

    public constructor(users : ChatUser[]) {
        this.users = users

        this.users.forEach(user => user.setChatRoom(this))
    }

    public sendMessage(receiversNick : string[], message : string) {

        // Send message to selected users
        if (receiversNick) {
            receiversNick.forEach(receiverNick => {

                this.users.forEach(user => {
                    if (receiverNick === user.getNick()) {
                        user.receiveMessage(message)
                    }
                })    
            })

        // Send message to everybody
        } else {
            this.users.forEach(user => {
                user.receiveMessage(message)
            })
        }   
    }  
}