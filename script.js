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

function getHumanChoice(arg) {
    let humanChoice = capitalize(arg);

    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissor") {
        return humanChoice;
    } else {
        alert("Please only choose between Rock, Paper, or Scissor only!");
        return getHumanChoice();
    }
}

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

function loopGame() {
    if (humanScore >= targetScore || compScore >= targetScore) {
        if (humanScore >= targetScore) {
            console.log("Congratulations, you are the champion!");
        } else {
            console.log("Computer wins. Better luck next time!");
        }
        return;
    } else {
        humanSelection = getHumanChoice(result);
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        loopGame();
    }
}

// function playGame() {

//     const targetScore = 5;
//     let humanScore = 0;
//     let compScore = 0;

//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
    
//     function playRound(humanChoice, compChoice) {
//         if (humanChoice === compChoice) {
//             console.log("Tie!")
//         } else if (humanChoice === "Rock" && compChoice === "Scissor" 
//             || humanChoice === "Paper" && compChoice === "Rock" 
//             || humanChoice === "Scissor" && compChoice === "Paper"
//         ) {
//             console.log(`You Win!!! ${humanChoice} beats ${compChoice}`)
//             return humanScore++;
//         } else {
//             console.log(`You Lose haha. ${compChoice} beats ${humanChoice}`);
//             return compScore++;
//         }
//     }

//     playRound();

//     function loopGame() {
//         if (humanScore >= targetScore || compScore >= targetScore) {
//             if (humanScore >= targetScore) {
//                 console.log("Congratulations, you are the champion!");
//             } else {
//                 console.log("Computer wins. Better luck next time!");
//             }
//             return;
//         } else {
//             humanSelection = getHumanChoice();
//             computerSelection = getComputerChoice();
//             playRound(humanSelection, computerSelection);
//             loopGame();
//         }
//     }

//     loopGame();
// }

const buttons = document.querySelectorAll('button');
const targetScore = 5;
let humanScore = 0;
let compScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', event => {
        let result = event.target.textContent;
        let humanSelection = getHumanChoice(result);
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        loopGame();
    });
});