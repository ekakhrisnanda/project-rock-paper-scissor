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
    let humanChoice = prompt("Choose your hero: Rock?, Paper?, Scissor?");

    if (humanChoice != "Rock" || humanChoice != "Paper" || humanChoice != "Scissor") {
        alert("Please choose between Rock, Paper, or Scissor only!");
    } else {
        return true;
    }
}