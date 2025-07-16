"use strict";
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

let x = 0;
let y = 0; // Start at A (0,0) -> [row][col]

const moves = [];
moves.push(board[x][y]); // A 

// Move Right to B
y++;
moves.push(board[x][y]); // B (0,1)

// Move Right to C
y++;
moves.push(board[x][y]); // C (0,2)

// Move Down to F
x++;
moves.push(board[x][y]); // F (1,2)

// Move left to E
y--;
moves.push(board[x][y]); // E (1,1)

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
