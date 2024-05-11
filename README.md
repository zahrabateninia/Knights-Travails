# Knight Travails Project

Knight Moves is a JavaScript function that finds the shortest possible path for a knight to move from one square to another on a chessboard. It outputs all the squares the knight will stop on along the way.

## Overview

In chess, a knight moves in an "L" shape: two squares in one direction (horizontally or vertically) and then one square perpendicular to that direction. The Knight Moves function takes two square coordinates on a chessboard and returns the shortest path between them.

## Examples

- `knightMoves([0,0],[1,2])` returns `[[0,0],[1,2]]`
- `knightMoves([0,0],[3,3])` returns `[[0,0],[2,1],[3,3]]`
- `knightMoves([3,3],[0,0])` returns `[[3,3],[2,1],[0,0]]`
- `knightMoves([0,0],[7,7])` returns `[[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]]`

## Usage

To use the Knight Moves function in your project, simply import or include it and call it with the starting and ending square coordinates. Make sure the coordinates are within the bounds of the chessboard.

```javascript
const path = knightMoves([0,0],[1,2]);
console.log(path); // Output: [[0,0],[1,2]]
```

## Algorithm

The Knight Moves function uses a Breadth-First Search (BFS) algorithm to find the shortest path between the starting and ending squares. It explores all possible moves of the knight from each square and systematically builds paths until the ending square is reached.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
