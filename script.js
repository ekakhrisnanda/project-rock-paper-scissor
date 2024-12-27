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

const targetScore = 5;
let humanScore = 0;
let compScore = 0;

// Winner per round & the champion announcer
const round = document.querySelector('.round');
const displayWinner = document.createElement('p');
round.appendChild(displayWinner);

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
        displayWinner.textContent = 'Tie';
    } else if (humanSelection === "Rock" && computerSelection === "Scissor" 
        || humanSelection === "Paper" && computerSelection === "Rock" 
        || humanSelection === "Scissor" && computerSelection === "Paper"
    ) {
        displayWinner.textContent = `You Win!!! ${humanSelection} beats ${computerSelection}`;
        humanScore++;
        return displayHumanScore.textContent = "Human Score = " + humanScore;

    } else {
        displayWinner.textContent = `You Lose haha. ${computerSelection} beats ${humanSelection}`;
        compScore++;
        return displayCompScore.textContent = "Computer Score = " + compScore;
    }
}

let gameOver = false;

function checkTheChampion() {
    if (humanScore >= targetScore || compScore >= targetScore) {
        gameOver = true;
        if (humanScore >= targetScore) {
            displayWinner.textContent = "Congratulations, you are the champion!";
        } else {
            displayWinner.textContent = "Computer wins. Better luck next time!";
        }
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (gameOver) return;

        const humanSelection = e.currentTarget.innerText;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkTheChampion();
    });
});

// create if statement
// if human score or comp score reach the target score
// display the champion

// if (humanScore >= targetScore) {
//     displayWinner.textContent = "Congratulations, you are the champion!";
// } else {
//     displayWinner.textContent = "Computer wins. Better luck next time!";
// }



