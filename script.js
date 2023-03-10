playRound();

function playRound() {
const computerScore = 0;
const playerScore = 0;
for (let i = 0; i < 5; i++) {
    console.log(i)
    gamePlay();
    if (gamePlay == 'computer') {
        computerScore++;
        console.log(computerScore);
        alert('Computer wins!')
    }    
    else if (gamePlay == 'player') {
        playerScore++;
        console.log(playerScore);
        alert('Player wins!')
    }
    else {
        alert('Its a tie!')
    }
}

if (playerScore < computerScore) {
    alert('Computer overall winner')
}
else {
    alert('Player overall winner')
}

}
function gamePlay() {
const computer = computerChoice();
const player = playerChoice();
console.log(computer)
console.log(player)
if (computer == 'rock' && player == 'rock') {
    const result = 'You both picked rock, its a tie!'
    alert(result);
    return 'tie';
}
else if (computer == 'paper' && player == 'paper') {
    const result = 'You both picked paper, its a tie!'
    alert(result)
    return 'tie';
}
else if (computer == 'scissors' && player == 'scissors') {
    const result = 'You both picked scissors, its a tie!'
    alert(result)
    return 'tie';
}
else if (computer == 'rock' && player == 'paper') {
    const result = 'You  won! Paper beats rock!'
    alert(result)
    return 'player';
}
else if (computer == 'rock' && player == 'scissors') {
    const result = 'You lost! Rock beats scissors!'
    alert(result)
    return 'computer';
}
else if (computer == 'paper' && player == 'rock') {
    const result = 'You  lost! Paper beats rock!';
    alert(result)
    return 'computer';
}
else if (computer == 'paper' && player == 'scissors') {
    const result = 'You  won! Scissors beats paper!';
    alert(result)
    return 'player';
}
else if (computer == 'scissors' && player == 'paper') {
    const result = 'You  lost! Scissors beats paper!';
    alert(result)
    return 'computer';
}
else if (computer == 'scissors' && player == 'rock') {
    const result = 'You  won! Rock beats scissors!';
    alert(result)
    return 'player';
}
}

function computerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
        'rock';
        return 'rock';
        case 1:
        'paper';
        return 'paper';
        case 2:
        'scissors';
        return 'scissors';
    }
}

function playerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
        'rock';
        return 'rock';
        case 1:
        'paper';
        return 'paper';
        case 2:
        'scissors';
        return 'scissors';
    }
}