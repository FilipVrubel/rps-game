let getRandom = () => Math.floor(Math.random() * 100);

function getComputerChoice() {
    let num = getRandom();
    return num % 3 == 0 ? "rock" : num % 3 == 1 ? "paper" : "scissors";
}

let getHumanChoice = () => prompt("Enter your choice (rock / paper / scissors):");
