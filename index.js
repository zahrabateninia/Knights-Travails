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

    let boardSize = 8;
    // define a queue to perform BFS 
    const queue = [[start]]; 

    // create a 2D array
    const visited = Array.from({ length: boardSize }, () => Array(boardSize).fill(false)); //?????????????????/
    // output of visited array for board size of 8 is : 
    // [
    //     [false, false, false, false, false, false, false, false],
    //     [false, false, false, false, false, false, false, false],
    //     [false, false, false, false, false, false, false, false],
    //     [false, false, false, false, false, false, false, false],
    //     [false, false, false, false, false, false, false, false],
    //     [false, false, false, false, false, false, false, false],
    //     [false, false, false, false, false, false, false, false],
    //     [false, false, false, false, false, false, false, false]
    //   ]
    // By initializing the visited array with false, we are essentially saying that no squares have been visited initially.
    // Then, as we explore squares during the BFS process, we update the visited array accordingly to mark the squares that have been visited. 
    // This helps us avoid revisiting them and ensures that we find the shortest path efficiently.

    // mark the start square as visited 
    visited[start[0]][start[1]] = true;

    // iterate until the queue is empty
    while(queue.length > 0){
        const path = queue.shift();
        // get the last square of the path using destructuring assignment
        const [x, y] = path[path.length - 1] 
    }


}