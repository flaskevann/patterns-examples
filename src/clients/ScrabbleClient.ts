import { sleep } from "../tools/execution"

import ScrabbleBoard from "../models/scrabble/ScrabbleBoard"

import { PlayedScrabbleTiles as PlayedTiles } from "../models/scrabble/PlayedScrabbleTiles"

import { ScrabbleTile as Tile } from "../models/scrabble/ScrabbleTile"

export default function run() {

    // .. some kind of client code before
    
    const players : string[] = ["alfa", "beta", "omega", "delta"]
    const board : ScrabbleBoard = new ScrabbleBoard(players)

    var newPlayedTiles : object = { // not really a valid play, this is just example use
        1: new Tile("Y", 1),
        2: new Tile("E", 1),
        3: new Tile("S", 1)
    }
    board.playNewTiles(new PlayedTiles(players[0], newPlayedTiles))
    
    sleep(11, "Waiting for any player to challenge previous play.")
    newPlayedTiles = { // not really a valid play, this is just example use
        5: new Tile("N", 1),
        6: new Tile("O", 1),
    }
    board.playNewTiles(new PlayedTiles(players[1], newPlayedTiles))
    
    sleep(3, "delta is considering challenging previous play.")
    board.checkNewTiles(players[3])
    
    newPlayedTiles = { // not really a valid play, this is just example use
        8: new Tile("H", 1),
        9: new Tile("E", 1),
        10: new Tile("L", 1),
        11: new Tile("L", 1),
        12: new Tile("O", 1)
    }
    board.playNewTiles(new PlayedTiles(players[2], newPlayedTiles))
    sleep(12, "Waiting for any player to challenge previous play.")
    
    newPlayedTiles = { // not really a valid play, this is just example use
        16: new Tile("N", 1),
        17: new Tile("O", 1),
        18: new Tile("P", 1),
        19: new Tile("E", 1)
    }
    board.playNewTiles(new PlayedTiles(players[3], newPlayedTiles))
    sleep(13, "Waiting for any player to challenge previous play.")
    
    newPlayedTiles = { // not really a valid play, this is just example use
        20: new Tile("S", 1),
        21: new Tile("O", 1),
        22: new Tile("M", 1),
        23: new Tile("E", 1)
    }
    board.playNewTiles(new PlayedTiles(players[0], newPlayedTiles))
    
    board.skipTurn(players[1])
    
    sleep(13, "Waiting for any player to challenge previous play.")
    newPlayedTiles = { // not really a valid play, this is just example use
        25: new Tile("L", 1),
        26: new Tile("A", 1),
        27: new Tile("S", 1),
        28: new Tile("T", 1)
    }
    board.playNewTiles(new PlayedTiles(players[2], newPlayedTiles))
    
    board.exchangeTiles(players[3], [new Tile("X", 5), new Tile("Y", 4)])

    console.log(board.toString())
        
    // .. some kind of client code after
}