//When user inputs choice {rock,paper, or scissors}
//Computer generates random output {rock, paper, or scissors}

//winner can be decided using if statements
//Computer displays who won
//game plays for five rounds

let playerScore = 0;
let computerScore = 0;


const resultContainer = document.createElement('div');

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

    
    function playerChoice() {
        let playerSelection = prompt( 'input choice here').toLowerCase();
        return playerSelection
    }

    let computerSelection = getComputerChoice();

    const buttonContainer = document.querySelector('div');
    console.log(buttonContainer);
    
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

    buttonContainer.appendChild(rock);
    buttonContainer.appendChild(paper);
    buttonContainer.appendChild(scissors);

    rock.addEventListener('click',playRound('rock'));
    paper.addEventListener('click',playRound('paper'));
    scissors.addEventListener('click',playRound('scissors'));


    function playRound(playerSelection, computerSelection) {
    

        if (playerSelection === computerSelection) {
            return 'It\'s a tie!';
        }
    
        if ( playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore += 1;
            return 'You lose!Paper wins';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore += 1;
            return 'You win! Scissors loses';
        } 
    
        if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore += 1;
            return 'You win!Rock loses';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore += 1;
            return 'You lose!Scissors wins';
        }
    
        if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore += 1;
            return 'You lose! Rock wins';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore += 1;
            return 'You win! Paper loses';
        }
    
    }





/*function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = playerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    return `Game finished. Player Score: ${playerScore} Computer Score: ${computerScore}`
}



game();

console.log(playerScore, computerScore); */










    