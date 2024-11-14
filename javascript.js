let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const num = Math.random();

    if(num < 0.33) return "rock";
    else if(num < 0.66) return "paper";
    else return "scissors"
}

function getUserChoice(){
    const userChoice = prompt("Options: rock, paper, scissors", "rock");
    return userChoice;
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === computerChoice) return "Tie";

    let playerWon = false;

    switch(playerChoice){
        case("rock"):
            if(computerChoice === "scissors")
                playerWon = true;
        break;
        case("paper"):
            if(computerChoice === "rock")
                playerWon = true;
        break;
        case("scissor"):
            if(computerChoice === "paper")
                playerWon = true;
        break;
    }

    if(playerWon){
        humanScore++;
        return `You won! ${playerChoice} beats ${computerChoice}`;
    }

    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
}

console.log(playRound(getUserChoice(), getComputerChoice()));