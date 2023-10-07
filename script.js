//When user inputs choice {rock,paper, or scissors}
//Computer generates random output {rock, paper, or scissors}

//winner can be decided using if statements
//Computer displays who won
//game plays for five rounds

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    
    let computerChoice = num.toFixed(2);
    
    if (computerChoice <= 0.33) {
    computerChoice = 'rock';
    } else if (computerChoice > 0.33 && computerChoice <= 0.67) {
    computerChoice = 'paper';
    } else {
    computerChoice = 'scissors'
    }
    return computerChoice;

}

    

let computerSelection = getComputerChoice();

const buttonContainer = document.querySelector('div');
    

const rock = document.createElement('button');
rock.textContent = "Rock";

const paper = document.createElement('button');
paper.textContent = "Paper";

const scissors = document.createElement('button');
scissors.textContent = "Scissors";

buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);



const resultContainer = document.createElement('div');
const resultStatement = document.createElement('p');
const endStatement = document.createElement('p');

resultContainer.appendChild(resultStatement);
resultContainer.appendChild(endStatement);
buttonContainer.appendChild(resultContainer);



const scoreContainer = document.createElement('div');
const playerScoreDisplay = document.createElement('p');
const computerScoreDisplay = document.createElement('p');

scoreContainer.appendChild(playerScoreDisplay);
scoreContainer.appendChild(computerScoreDisplay);
buttonContainer.appendChild(scoreContainer);

playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;




function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        resultStatement.textContent = "It's a tie";
    }
    
    if ( playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore += 1;
            resultStatement.textContent = "You lose!Paper wins";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore += 1;
            resultStatement.textContent = "You win!Scissors loses";
    } 
    
    if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore += 1;
            resultStatement.textContent = "You win!Rock loses";           
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore += 1;
            resultStatement.textContent = "You lose!Scissors wins";
    }
    
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore += 1;
            resultStatement.textContent = "You lose!Rock wins";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore += 1;
            resultStatement.textContent = "You win!Paper loses";
    }
    
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        endStatement.textContent = 'You win';
    } else if (computerScore === 5) {
        endStatement.textContent = 'You lose';
    }
};






        rock.addEventListener('click', function (){
            let computerSelection = getComputerChoice();
            playRound('rock', computerSelection);
        });
        paper.addEventListener('click',function (){
            let computerSelection = getComputerChoice();
            playRound('paper', computerSelection);
        });
        scissors.addEventListener('click',function (){
            let computerSelection = getComputerChoice();
            playRound('scissors', computerSelection);
        });
    












    