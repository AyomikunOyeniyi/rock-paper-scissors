//When user inputs choice {rock,paper, or scissors}
//Computer generates random output {rock, paper, or scissors}

//winner can be decided using if statements
//Computer displays who won
//game plays for five rounds

let num = Math.random();

let computerChoice = num.toFixed(1);

if (computerChoice <= 0.3) {
    computerChoice = 'Rock';
} else if (computerChoice > 0.3 && computerChoice <= 0.6) {
    computerChoice = 'Paper';
} else {
    computerChoice = 'Scissors'
}

function getComputerChoice() {
    return computerChoice;
}
console.log(getComputerChoice())

