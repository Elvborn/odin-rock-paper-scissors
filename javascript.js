const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const output = document.querySelector("#output");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const num = Math.random();

    if(num < 0.33) return "rock";
    else if(num < 0.66) return "paper";
    else return "scissors"
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
        case("scissors"):
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

function outputGameInfo(str){

    const playerWon = humanScore >= 5;
    const computerWon = computerScore >= 5;

    if(!playerWon && !computerWon){
        const text = `${str} <br><br> Current score: User ${humanScore} | Computer: ${computerScore}`;
        output.style.background = "white";    
        output.innerHTML = text;
        
        return;
    }

    if(playerWon){
        output.innerHTML = "YOU WIN!";
        output.style.background = "lightgreen";    
    }else{
        output.innerHTML = "YOU LOSE!";
        output.style.background = "red";    
    }

    humanScore = 0;
    computerScore = 0;
}

btnRock.addEventListener("click", function(){
    outputGameInfo(playRound("rock", getComputerChoice()));
});

btnPaper.addEventListener("click", function(){
    outputGameInfo(playRound("paper", getComputerChoice()));
});

btnScissors.addEventListener("click", function(){
    outputGameInfo(playRound("scissors", getComputerChoice()));
});