function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors:");
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        if ((computerChoice === "rock" && humanChoice === "paper") ||
            (computerChoice === "paper" && humanChoice === "scissors") ||
            (computerChoice === "scissors" && humanChoice === "rock")
        ) {
            console.log(`You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`);
            humanScore++;
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            console.log(`You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`);
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice().toLowerCase());
    }

    if (computerScore < humanScore) {
        console.log("Winner, winner, chicken dinner! You've won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over! You've lost the game!");
    } else {
        console.log("The game ended as a tie!");
    }
}

playGame();