function getComputerChoice(){
    let randomVal = Math.floor(Math.random() * 3) + 1;
    
    if (randomVal === 1) {
        return "rock";
    } else if (randomVal === 2) {
        return "paper";
    } else if (randomVal === 3) {
        return "scissors";
    } else {
        return "Error";
    }
}

function getHumanChoice(){
    let answer = prompt("Choose rock, paper, or scissors: ");
    console.log(answer);
    return answer.toLowerCase();
}




function playGame(){
    var humanScore = 0;
    var computerScore = 0;
    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(humanChoice);
        console.log(computerChoice);
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++;
            console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
            console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
            console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
            console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
            console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
            console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        } else {
            console.log("Error");
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(i);
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}
    
playGame();
