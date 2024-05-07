#!/usr/bin/env node

// knightMoves() takes two square coordinates as input 
function knightMoves(start, end){
    // possible moves for a knight
    // each move is represented by two elements: the change in x-coordinate and the change in y-coordinate
    const moves = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2]
    ];

    let chessBoardSize = 8;
    // define a queue to perform BFS 
    const queue = [[start]]; 

    

}