// (1) Set a constant variable for moves as an array

const moves = ['rock', 'paper', 'scissors']

function playMove (moves){
    
    return moves[Math.floor(Math.random()*moves.length)] 
}

console.log(playMove(moves));

const playerMove = playMove()
const computerMove = playMove()

// switch(playerMove && computerMove){
//     case 'rock' && 'paper':
//         console.log('Player wins!');
//         break;
    
// }




