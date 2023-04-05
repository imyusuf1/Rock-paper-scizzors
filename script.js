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
let playerSelection = 'ScizzoRs';
// players a single round or rock, paper scizzors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        alert('Draw! You both selected ' + playerSelection);
    } else {
        if (playerSelection === 'rock') {
             if (computerSelection === 'paper') {
                alert('You Lose! Paper beats Rock');
            } else if (computerSelection === 'scizzors') {
                alert('You Win! Rock beats scizzors');
            }
         } 
         else if (playerSelection === 'paper') {
            if (computerSelection === 'scizzors') {
                alert('You Lose! Scizzors beats Paper');
            } else if (computerSelection === 'rock') {
                alert('You Win! Paper beats Rock');
             }
        } 
        else if (playerSelection === 'scizzors') {
            if (computerSelection === 'rock') {
                alert('You Lose! Rock beats Scizzors');
            } else if (computerSelection === 'paper') {
                alert('You Win! Scizzors beats Paper');
             }
        }
    }
}
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);


