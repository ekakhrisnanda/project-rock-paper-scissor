// Create getComputerChoice function
// Pick a random choice between rock, paper, scissor using math.random()
// If num <= 0.33, picks Rock
// If num <= 0.66, picks Paper
// Else picks Scissor

function getComputerChoice() {
    let compChoice = Math.random();

    if (compChoice <= 0.33) {
        return "Rock";
    } else if (compChoice <= 0.66) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

// Create getHumanChoice function
// Store the value inside humanChoice variable
// If values != rock || != paper || != scissor return alert
// Else return true

function getHumanChoice() {
    let humanChoice = prompt("Choose your hero: Rock? Paper? Scissor?");

    if (humanChoice != "Rock" || humanChoice != "Paper" || humanChoice != "Scissor") {
        alert("Please choose between Rock, Paper, or Scissor only!");
    } else {
        return true;
    }
}

// Create a capitalize function
// Substr the first letter of a string
// Slice the rest of the string
// Concatenate them but remember to add toUpperCase and toLowerCase

let capitalize = str => {
    let first = str.substr(0, 1);
    let rest = str.slice(1);

    return first.toUpperCase() + rest.toLowerCase();
}

// Create score variables for both and initialize those value with 0

let humanScore = 0;
let compScore = 0;

// Create a new function named playRound
// Define 2 parameters for it: humanChoice and compChoice and use them as arguments
// Write a console.log() that return about win and lose such as: “You lose! Paper beats Rock”.
// Increment humanScore and compScore based who's the winner each round

function playRound(humanChoice, compChoice) {
    if (humanChoice == compChoice) {
        console.log("Tie!")
    } else if (humanChoice === "Rock" && compChoice === "Scissor" 
        || humanChoice === "Paper" && compChoice === "Rock" 
        || humanChoice === "Scissor" && compChoice === "Paper"
    ) {
        console.log(`You Win!!! ${humanChoice} beats ${compChoice}`)
        humanScore++;
    } else {
        console.log(`You Lose haha. ${compChoice} beats ${humanChoice}`);
        compScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);