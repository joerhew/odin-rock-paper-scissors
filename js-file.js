let buttons = document.querySelectorAll('.choice');
let textPlayerSelection = document.querySelector('#player-selection');
let textGameResult = document.querySelector('#game-result');
let playerScoreBoard = document.querySelector('#player-score');
let computerScoreBoard = document.querySelector('#computer-score');
let resetButton = document.querySelector("#reset");

let playerSelection;
let playerScore = 0;
let computerScore = 0;

playerScoreBoard.textContent = playerScore;
computerScoreBoard.textContent = computerScore;

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        textPlayerSelection.textContent = 'You played ' + button.id;
        playRound(button.id, getComputerChoice());
        playerScoreBoard.textContent = playerScore;
        computerScoreBoard.textContent = computerScore;
    });
});

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    textPlayerSelection.textContent = "Reset! It's a new game!";
    textGameResult.textContent = '';
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

//Write a function called getComputerChoice which generates a random value between 'rock', 'paper', and 'scissors'

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }}

function playerWins(playerSelection, computerSelection) {
    playerScore++;
    textGameResult.textContent = "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection + "!";
}

function computerWins(playerSelection, computerSelection) {
    computerScore++;
    textGameResult.textContent = "Computer wins! " + capitalizeFirstLetter(playerSelection) + " loses to " + computerSelection + "!";
}

function theyTie(playerSelection, computerSelection) {
    textGameResult.textContent = "You tie! " + capitalizeFirstLetter(playerSelection) + " equals " + computerSelection + "!";
}

//Write a function that plays a single round of rock paper scissors that takes in 2 parameters, playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        theyTie(playerSelection, computerSelection);
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerWins(playerSelection, computerSelection);
        }  else {
            computerWins(playerSelection, computerSelection);
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerWins(playerSelection, computerSelection);
        } else {
            computerWins(playerSelection, computerSelection);
        }
    } else {
        if (computerSelection === 'paper') {
            playerWins(playerSelection, computerSelection);
        } else {
            computerWins(playerSelection, computerSelection);
        }
    };
}

        

//Write a function called game() that calls the playRound function inside of this one to play a 5 round game that keeps a score
function game() {
    //Generate a prompt to get playerSelection
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 3 && computerWins < 3) {
        
        
        playerSelection = prompt("What's your choice?").toLowerCase();
        computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
        console.log(whoWins);

        if (whoWins === 'player') {
            playerWins++;
            
        } else if (whoWins === 'computer') {
            computerWins++;
            
        } else {
        }
    }

    if (playerWins > computerWins) {
        console.log("Congrats, you've won best out of 5! It's Computer: " + computerWins + " vs. You: " + playerWins);
    } else if (computerWins > playerWins) {
        console.log("You've lost! It's Computer: " + computerWins + " vs. You: " + playerWins);
    } else {
        console.log("You've tied! It's Computer: " + computerWins + " vs. You: " + playerWins);
    }
}
