#!/usr/bin/env node
function buildBoard(){
    // make a 8x8 chess board 
    const board = []
    for(let i = 0; i<8 ; i++){
        for(let j = 0; j<8 ; j++){
            board.push([i,j])
        }
    }
    return board
}
function knightMoves(start, end){
    const chessBoard = buildBoard();
}
