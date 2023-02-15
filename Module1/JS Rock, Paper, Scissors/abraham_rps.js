
const choices = ["rock", "paper", "scissors"];

const randomNum = Math.floor(Math.random()*3);

const computerChoice = choices[randomNum]

// the purpose of the code related to isNotValid is to format and to prevent erroneous user input

let userChoice = "";

// this will determine how long while loop runs; this needs truthy value in order to run and then set falsy value to not run. it's not a valid entry until i check if it's a valid entry. one way to think of while loop is that it can be used to check user input? or to run a code command through a process.

let isNotValid = true;

while (isNotValid) {
    userChoice = prompt("Rock, paper, or scissors?")
    userChoice = userChoice.trim().toLowerCase();

    if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
        isNotValid = false;
    }
}

console.log(userChoice);
console.log(computerChoice);

if (userChoice === computerChoice) {
    console.log("It's a draw!");
} else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("Your win!");
} else if (userChoice === "paper" && computerChoice === "rock"){
    console.log("Your win!");
} else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("Your win!")
} else {
    console.log("Computer wins!");
}

// maybe later try to make this best of 5?