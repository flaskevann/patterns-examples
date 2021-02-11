import User from "../models/player/User"
import { IPlayer, Player } from "../models/player/Player"
import { UserToPlayerAdapter } from "../models/player/Adapters"

export default function run() {

    // .. some kind of client code before
    
    const player : IPlayer = new Player("marco", 0, 0)
    player.setLevel(1)
    player.setScore(10)
    console.log("player: " + player)
    
    const incompatibleUserObject : User = new User("mail@example.com", "Pete Dumbbell", null)
    const playerAdapterForIncompatibleUserObject : IPlayer = new UserToPlayerAdapter(incompatibleUserObject)
    playerAdapterForIncompatibleUserObject.setLevel(2)
    playerAdapterForIncompatibleUserObject.setScore(20)
    console.log("user as player: " + playerAdapterForIncompatibleUserObject)
    
    // .. some kind of client code after
}