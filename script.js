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
    let humanChoice = capitalize(prompt("Choose your hero: Rock? Paper? Scissor?"));

    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissor") {
        return humanChoice;
    } else {
        alert("Please only choose between Rock, Paper, or Scissor only!");
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

// Create playGame func
// Move in playRound func and score variables in it

function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const targetScore = 5;


    // This function must call itself and return a new value
    // Else it would stop when it gets a certain point
    // Think for make a new func called decideWinner (just think about it)
    // Consider to check increment in playRound and think it could be move around inside playGame
    // Make a new variable called targetScore
    
    function playRound(humanChoice, compChoice) {
        if (humanChoice == compChoice) {
            console.log("Tie!")
        } else if (humanChoice === "Rock" && compChoice === "Scissor" 
            || humanChoice === "Paper" && compChoice === "Rock" 
            || humanChoice === "Scissor" && compChoice === "Paper"
        ) {
            console.log(`You Win!!! ${humanChoice} beats ${compChoice}`)
            return humanScore++;
        } else {
            console.log(`You Lose haha. ${compChoice} beats ${humanChoice}`);
            return compScore++;
        }
    }

    let humanScore = 0;
    let compScore = 0;
}

playGame();

// If both scores < 5, execute the playRound again and recall choice functions
// If one of the score === 5, alert who wins
