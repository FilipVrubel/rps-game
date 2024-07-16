let getRandom = () => Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {
    let num = getRandom();
    return num % 3 == 0 ? "rock" : num % 3 == 1 ? "paper" : "scissors";
}

let getHumanChoice = () => prompt("Enter your choice:");

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Tie! Both players chose ${humanChoice}.`)
    } else if (humanChoice == "rock") {
        switch(computerChoice) {
            case "paper":
                console.log("You lose! Paper beats Rock");
                return "computer";
            case "scissors":
                console.log("You win! Rock beats Scissors.")
                return "human";
        }
    } else if (humanChoice == "paper") {
        switch(computerChoice) {
            case "rock":
                console.log("You win! Paper beats Rock.");
                return "human";
            case "scissors":
                console.log("You lose! Scissors beats Paper.");
                return "computer";
        }
    } else {
        switch(computerChoice) {
            case "rock":
                console.log("You lose! Rock beats Scissors.");
                return "computer";
            case "paper":
                console.log("You win! Scissors beats Paper.")
                return "human";
        }
    }
}

function determineWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log(`You won! You: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lost! You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`Tie! You: ${humanScore}, Computer: ${computerScore}`)
    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;
    let roundWinner;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        
        roundWinner = playRound(humanChoice, computerChoice);
        
        switch (roundWinner) {
            case "human":
                humanScore++;
                break;
            case "computer":
                computerScore++;
                break;
        }
    }

    determineWinner(humanScore, computerScore);
    console.log(humanScore)
    console.log(computerScore)
}

playGame();