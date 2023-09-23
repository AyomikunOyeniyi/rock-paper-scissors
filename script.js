//When user inputs choice {rock,paper, or scissors}
//Computer generates random output {rock, paper, or scissors}

//winner can be decided using if statements
//Computer displays who won
//game plays for five rounds

let playerScore = 0;
let computerScore = 0;

let num = Math.random();

let computerChoice = num.toFixed(2);

if (computerChoice <= 0.33) {
    computerChoice = 'Rock';
} else if (computerChoice > 0.33 && computerChoice <= 0.67) {
    computerChoice = 'Paper';
} else {
    computerChoice = 'Scissors'
}

function getComputerChoice() {
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if ( playerSelection == 'rock' && computerSelection == 'paper') {
        ++computerScore;
        return "You lose!Paper wins";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        ++playerScore;
        return "You win! Scissors loses";
    } 

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        ++playerScore;
        return "You win!Rock loses";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        ++computerScore;
        return "You lose!Scissors wins"
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        ++computerScore;
        return "You lose! Rock wins";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        ++playerScore;
        return "You win! Paper loses";
    }

}

const playerSelection = 'rock';

const computerSelection = getComputerChoice().toLowerCase();



function game() {
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}


console.log(playerScore, computerScore);



    