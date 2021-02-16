import { sleep } from "../tools/execution"
import ScrabbleBoard from "../models/scrabble/ScrabbleBoard"

export default function run() {

    // .. some kind of client code before
    
    const players : string[] = ["alfa", "beta", "omega", "delta"]
    const board : ScrabbleBoard = new ScrabbleBoard(players)
    
    board.playTiles(players[0], ["W", "K"])
    
    sleep(11, "Waiting for any player to challenge previous play.")
    board.playTiles(players[1], ["S", "E", "C", "O", "N", "D"])
    
    sleep(3, "delta is considering challenging previous play.")
    board.checkTiles(players[3])
    
    board.playTiles(players[2], ["T", "H", "I", "R", "D"])
    sleep(12, "Waiting for any player to challenge previous play.")
    
    board.playTiles(players[3], ["F", "O", "U", "R", "T", "H"])
    sleep(13, "Waiting for any player to challenge previous play.")
    
    board.playTiles(players[0], ["F", "I", "F", "T", "H"])
    
    board.skipTurn(players[1])
    
    sleep(13, "Waiting for any player to challenge previous play.")
    board.playTiles(players[2], ["S", "I", "X", "T", "H"])
    
    board.exchangeTiles(players[3], ["X"])
        
    // .. some kind of client code after
}