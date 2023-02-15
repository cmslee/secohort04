//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)
// If the player's dice roll is higher than the computer dice roll;
// PLAYER scores one point
// otherwise, COMPUTER scores one point
// if a player reaches 5 points that player wins the game




// (1) log a random number from 1-6 to test random number expression. if it's good to go, let's start setting up the game! Another possibility, which might be less wordy is: console.log(Math.ceil(Math.random()*6)

/*
console.log(Math.floor(Math.random()*6) + 1
*/

// (2) create variables to store random number for player and for computer by assigning random number expression

/*
const playerRoll = Math.floor(Math.random()*6) + 1;
const computerRoll = Math.floor(Math.random()*6) + 1;
*/

// (3b)  ...and assign function name to player and computer Roll variables.
const playerRoll = rollDice();
const computerRoll = rollDice();

// (6a) to start implementing point keeping program, let's set re-assignable variables to store the score value...
let playerScore = 0;
let computerScore = 0;

// (3a)  this doesn't adhere to DRY principle, so create a function that allows for flexibility in random number expression...

function rollDice(){
    return Math.floor(Math.random()*6)+1
}

// (4) let's run it!

/* comment out at (8)
console.log(`Player rolls ${playerRoll}`);
console.log(`Computer rolls ${computerRoll}`);
*/

// (5) let's write out the rules of the game by setting conditions for winning and logging potential outcomes:

/*
if (playerRoll > computerRoll){
    console.log(`Player scores point!`);
}   else if (playerRoll < computerRoll){
    console.log(`Computer scores point!`);
}   else {
    console.log('It\'s a draw!');
}
*/

// (6a) ...and add increment to "if...else" code blocks to assign 1 point to each winning condition and revise log to include changing point value (playerScore, computerScore). **Note: I didn't comment this section of code out, so it runs a first round with slightly different syntax before going into loop. I kind of like this. However, without this first round, the first round doesn't log a result and I wonder what's causing that error...

/* comment out at (8)
if (playerRoll > computerRoll){
    playerScore++;
    console.log(`Player scores ${playerScore} point!`);
}   else if (playerRoll < computerRoll){
    computerScore++;
    console.log(`Computer scores ${computerScore} point!`);
}   else {
    console.log('It\'s a draw!');
}
*/

// (7a) let's determine what we need to do to keep score. one way to do this is a loop. what lines of code need to be part of the loop?

/* answer --
const playerRoll = rollDice();
const computerRoll = rollDice();
console.log(`Player rolls ${playerRoll}`);
console.log(`Computer rolls ${computerRoll}`);
if (playerRoll > computerRoll){
    playerScore++;
    console.log(`Player scores ${playerScore} point!`);
}   else if (playerRoll < computerRoll){
    computerScore++;
    console.log(`Computer scores ${computerScore} point!`);
}   else {
    console.log('It\'s a draw!');
}
-- */

// (8) let's try to do this using a while loop, where the while statement will continue to loop (i.e. the game remains in play) so long as two conditions are met (&&): both playerScore AND computerScore remain under 5 (i.e. neither player nor computer wins). let's run it! 

while (playerScore < 5 && computerScore < 5) {
    const playerRoll = rollDice();
    const computerRoll = rollDice();
    console.log(`Player rolls ${playerRoll}`);
    console.log(`Computer rolls ${computerRoll}`);

    if (playerRoll > computerRoll) {
        playerScore++;
        console.log(`Player scores a point! Player ${playerScore}, Computer ${computerScore}`);
    } else if (playerRoll < computerRoll) {
        computerScore++;
        console.log(`Computer scores a point! Computer ${computerScore}, Player ${playerScore}`);
    } else if (playerRoll === computerRoll) {
        console.log('It\'s a draw!');
    }
}

// (9) now let's log the winner! an easy way to do this is to use a ternery statement which will log a string of text based on a whether or not condition is true.  

playerScore > computerScore ? console.log('Congratulations! Player wins!') : console.log('Computer wins! Better luck next time!')

// (10) Final note: I have written this code so that it logs each exchange that leads to the end of the match, following a progression that could flow well in an actual game.
