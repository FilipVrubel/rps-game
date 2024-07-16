let getRandom = () => Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {
    let num = getRandom();
    return num % 3 == 0 ? "rock" : num % 3 == 1 ? "paper" : "scissors";
}

let getHumanChoice = () => prompt("Enter your choice:");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Tie! Both players chose ${humanChoice}.`)
    } else if (humanChoice == "rock") {
        switch(computerChoice) {
            case "paper":
                console.log("You lose! Paper beats Rock");
                computerScore++;
                break;
            case "scissors":
                console.log("You win! Rock beats Scissors.")
                humanScore++;
                break;
        }
    } else if (humanChoice == "paper") {
        switch(computerChoice) {
            case "rock":
                console.log("You win! Paper beats Rock.");
                humanScore++;
                break;
            case "scissors":
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
                break;
        }
    } else {
        switch(computerChoice) {
            case "rock":
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
                break;
            case "paper":
                console.log("You win! Scissors beats Paper.")
                humanScore++;
                break;
        }
    }
}

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);