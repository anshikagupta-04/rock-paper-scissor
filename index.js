let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
updateScoreElement();

  
document.querySelector('.js-rock-button')
.addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissor-button')
.addEventListener('click', () => {
    playGame('scissor');
});

document.body.addEventListener('keydown', (event) => {
if (event.key === 'r') {
    playGame('rock');
} else if (event.key === 'p') {
    playGame('paper');
} else if (event.key === 's') {
    playGame('scissor');
}
});

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
}

return computerMove;
}

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissor') {
    if (computerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'scissor') {
    result = 'Tie.';
    }

} else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
    } else if (computerMove === 'paper') {
    result = 'Tie.';
    } else if (computerMove === 'scissor') {
    result = 'You lose.';
    }
    
} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie.';
    } else if (computerMove === 'paper') {
    result = 'You lose.';
    } else if (computerMove === 'scissor') {
    result = 'You win.';
    }
}

if (result === 'You win.') {
    score.wins += 1;
} else if (result === 'You lose.') {
    score.losses += 1;
} else if (result === 'Tie.') {
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You
<img src="${playerMove}.jpg" class="move-icon">
<img src="${computerMove}.jpg" class="move-icon">
Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

