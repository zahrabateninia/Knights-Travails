#!/usr/bin/env node

function displayPath(path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    const result = [];
    for (const square of path) {
        result.push(`[${square}]`);
    }
    return result.join("\n");
}


function knightMoves(start, end){
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
    const visited = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));
    // By initializing the visited array with false, we are essentially saying that no squares have been visited initially.
    // Then, as we explore squares during the BFS process, we update the visited array accordingly to mark the squares that have been visited. 
    // This helps us avoid revisiting them and ensures that we find the shortest path efficiently.

    // mark the start square as visited 
    visited[start[0]][start[1]] = true;

    while(queue.length > 0){
        const path = queue.shift();
        // get the last square of the path using destructuring assignment
        const [x, y] = path[path.length - 1] 
        // the same as  : const lastSquare = path[path.length - 1]; const x = lastSquare[0]; const y = lastSquare[1]
        // if the current square is the end square return path
        if(x === end[0] && y === end[1]){
            return displayPath(path);
        }
        // if not, explore all the possible moves from that square
        for(const [dx,dy] of moves){
            let newX = x + dx;
            let newY = y + dy;

            if(newX >= 0 && newX < boardSize && newY>=0 && newY < boardSize && !visited[newX][newY]){
                // mark the new square as visited
                visited[newX][newY] = true;
                // enqueue the new path with the new square
                queue.push([...path, [newX, newY]]);
                // use the spread syntax (...) to create a new array. It concatenates the existing path array with the new square [newX, newY] at the end

            }
        }
        
    }
}

// Test Case

const knightPaths = knightMoves([3, 3], [4, 3]);
console.log(knightPaths)

// My Note
// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables