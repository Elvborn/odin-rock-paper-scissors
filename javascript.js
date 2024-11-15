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
        default:
            return "Please enter valid value!";
            break;
    }

    if(playerWon){
        humanScore++;
        return `You win this round! ${playerChoice} beats ${computerChoice}`;
    }

    computerScore++;
    return `You lose this round! ${computerChoice} beats ${playerChoice}`;
}

function playGame(){

    while(humanScore < 3 && computerScore < 3){
        console.log(playRound(getUserChoice(), getComputerChoice()));
    }


    if(humanScore > computerScore)
        console.log("You win!!!!");
    else
        console.log("You lose!!!");
}

playGame();