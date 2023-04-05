// randomly return either rock, paper or scizzors from the computer
function getComputerChoice() {
    let number = (Math.round(Math.random()*2));
    let choice;
    switch (number){
        case 0:
          choice = 'rock';
          break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scizzors';
            break;

    }
    return choice;
} 

const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let playerSelection = prompt("Please enter rock, paper or scizzors");
// plays a single round of rock, paper scizzors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        alert('Draw! You both selected ' + playerSelection);
        draws ++;
    } else {
        if (playerSelection === 'rock') {
             if (computerSelection === 'paper') {
                alert('You Lose! Paper beats Rock');
                computerScore ++;
            } else if (computerSelection === 'scizzors') {
                alert('You Win! Rock beats scizzors');
                playerScore ++;
            }
         } 
         else if (playerSelection === 'paper') {
            if (computerSelection === 'scizzors') {
                alert('You Lose! Scizzors beats Paper');
                computerScore ++;
            } else if (computerSelection === 'rock') {
                alert('You Win! Paper beats Rock');
                playerScore ++;
             }
        } 
        else if (playerSelection === 'scizzors') {
            if (computerSelection === 'rock') {
                alert('You Lose! Rock beats Scizzors');
                computerScore ++;
            } else if (computerSelection === 'paper') {
                alert('You Win! Scizzors beats Paper');
                playerScore++;
             }
        }
    }
}
//function that plays 5 rounds, keeps score and reports winner or loser
function game() {
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Please enter rock, paper or scizzors");
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Please enter rock, paper or scizzors");
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Please enter rock, paper or scizzors");
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt("Please enter rock, paper or scizzors");
    console.log(playRound(playerSelection, computerSelection));
if(playerScore > computerScore) {
    alert('You are the Winner!');
} else if (computerScore > playerScore) {
    alert('Sorry, You Lost!');
} 
}
game();

