let capitalize = str => {
    let first = str.substr(0, 1);
    let rest = str.slice(1);

    return first.toUpperCase() + rest.toLowerCase();
}

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

function getHumanChoice() {
    let humanChoice = capitalize(prompt("Choose your hero: Rock? Paper? Scissor?"));

    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissor") {
        return humanChoice;
    } else {
        alert("Please only choose between Rock, Paper, or Scissor only!");
        return getHumanChoice();
    }
}



function playGame() {

    const targetScore = 5;
    let humanScore = 0;
    let compScore = 0;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    function playRound(humanChoice, compChoice) {
        if (humanChoice === compChoice) {
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

    playRound();

    function loopGame() {
        if (humanScore >= targetScore || compScore >= targetScore) {
            if (humanScore >= targetScore) {
                console.log("Congratulations, you are the champion!");
            } else {
                console.log("Computer wins. Better luck next time!");
            }
            return;
        } else {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            loopGame();
        }
    }

    loopGame();
}

playGame();
// next round, take a new input from user and comp
// Stores the values inside the variable to overwrite previous values
// Play the playRound again

// Probably scores are the value to decide if the game need to loop or not

// If both scores < 5, execute the playRound again and recall choice functions
// If one of the score === 5, alert who wins

// Take input from user and also computer and store them inside their variables
// When the game starts, processing who wins and lose
// If someone wins in the first round, do increment in their score
// restart the game by taking user input and computer input
// Recall the round function again and if someone wins do increment
// Until someone gets into 5, declare who's the champion

// "Congratulations, you are the champion!" "Computer wins. Better luck next time!"
