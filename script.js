const getComputerChoice = () => {
    let compChoice = Math.random();

    if (compChoice <= 0.33) {
        return "Rock";
    } else if (compChoice <= 0.66) {
        return "Paper";
    } else {
        return "Scissor";
    }
};

// function loopGame() {
//     for(; humanScore < targetScore && compScore < targetScore; i++) {
//         humanSelection = gethumanSelection(result);
//         computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     if(humanScore >= targetScore) {
//         console.log("Congratulations, you are the champion!");
//     } else {
//         console.log("Computer wins. Better luck next time!");
//     }
// }

// function playGame() {

//     const targetScore = 5;
//     let humanScore = 0;
//     let compScore = 0;

//     let humanSelection = gethumanSelection();
//     let computerSelection = getComputerChoice();
    
//     function playRound(humanSelection, computerSelection) {
//         if (humanSelection === computerSelection) {
//             console.log("Tie!")
//         } else if (humanSelection === "Rock" && computerSelection === "Scissor" 
//             || humanSelection === "Paper" && computerSelection === "Rock" 
//             || humanSelection === "Scissor" && computerSelection === "Paper"
//         ) {
//             console.log(`You Win!!! ${humanSelection} beats ${computerSelection}`)
//             return humanScore++;
//         } else {
//             console.log(`You Lose haha. ${computerSelection} beats ${humanSelection}`);
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
//             humanSelection = gethumanSelection();
//             computerSelection = getComputerChoice();
//             playRound(humanSelection, computerSelection);
//             loopGame();
//         }
//     }

//     loopGame();
// }



const targetScore = 5;
let humanScore = 0;
let compScore = 0;

// Winner per round
const round = document.querySelector('.round');
const displayRoundWinner = document.createElement('p');
round.appendChild(displayRoundWinner);

// Score display
const score = document.querySelector('.score-container');
const displayHumanScore = document.createElement('p');
const displayCompScore = document.createElement('p');
displayHumanScore.textContent = "Human Score = " + humanScore;
displayCompScore.textContent = "Computer Score = " + compScore;
score.appendChild(displayHumanScore);
score.appendChild(displayCompScore);

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        displayRoundWinner.textContent = 'Tie';
    } else if (humanSelection === "Rock" && computerSelection === "Scissor" 
        || humanSelection === "Paper" && computerSelection === "Rock" 
        || humanSelection === "Scissor" && computerSelection === "Paper"
    ) {
        displayRoundWinner.textContent = `You Win!!! ${humanSelection} beats ${computerSelection}`;
        return humanScore++;
    } else {
        displayRoundWinner.textContent = `You Lose haha. ${computerSelection} beats ${humanSelection}`;
        return compScore++;
    }
}


const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        const humanSelection = e.currentTarget.innerText;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});

// change the console.logs inside playRound
// display the winner of the round by insert it through DOM

// loop around all the buttons
// If one of the each button clicked, return the txt content
// store the return value in a variable for human selection
// get the computer selection
// play the game
// increment score between two if one of has won the round
// if anybody reach the target score first, announce the winner



