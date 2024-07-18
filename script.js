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

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

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

