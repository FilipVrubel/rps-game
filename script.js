const body = document.querySelector("body");

const rock = document.createElement("button");
rock.textContent = "Rock";
body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
body.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
body.appendChild(scissors);

const msg = document.createElement("div");
body.appendChild(msg);

let humanScore = 0;
let computerScore = 0;

const score = document.createElement("div");
score.textContent = "You: 0, Computer: 0";
body.appendChild(score);

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

let getRandom = () => Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {
    let num = getRandom();
    return num % 3 == 0 ? "rock" : num % 3 == 1 ? "paper" : "scissors";
}

let getHumanChoice = () => prompt("Enter your choice:");

let winner;
function playRound(humanChoice, computerChoice) {
    if (humanScore == 5 || computerScore == 5) return;

    if (humanChoice == computerChoice) {
        msg.textContent = (`Tie! Both players chose ${humanChoice}.`);
        return;
    } else if (humanChoice == "rock") {
        switch(computerChoice) {
            case "paper":
                computerScore++;
                winner = "computer";
                break;
            case "scissors":
                humanScore++;
                winner = "human";
                break;
        }
    } else if (humanChoice == "paper") {
        switch(computerChoice) {
            case "rock":
                humanScore++;
                winner = "human";
                break;
            case "scissors":
                computerScore++;
                winner = "computer";
                break;
        }
    } else {
        switch(computerChoice) {
            case "rock":
                computerScore++;
                winner = "computer";
                break;
            case "paper":
                humanScore++;
                winner = "human";   
                break;
        }
    }

    score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore == 5) {
        msg.textContent = "You won the game!";
        return;
    } else if (computerScore == 5) {
        msg.textContent = "You lost the game!";
        return;
    }

    msg.textContent = winner == "human" ? `You win, ${humanChoice} beats ${computerChoice}` 
        : `You lose, ${computerChoice} beats ${humanChoice}`;
}

