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
        // the same as  : const lastSquare = path[path.length - 1]; const x = lastSquare[0]; const y = lastSquare[1]
        // if the current square is the end square return path
        if(x === end[0] && y === end[1]){
            return path;
        }
        // if not, explore all the possible moves from that square
        for(const [dx,dy] of moves){
            let newX = x + dx;
            let newY = y + dy;

            if(newX >= 0 && newX < boardSize && newY>=0 && newY < boardSize && !visited[newX][newY]){
                // mark the new square as visited
                visited[newX][newY] = true;
                
            }
        }
        
    }


}


// My Note
// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables