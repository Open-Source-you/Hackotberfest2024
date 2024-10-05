// Game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;

// DOM Elements
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const resetBtn = document.getElementById('resetBtn');

// Handle Guess Submission
guessBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    showMessage('Please enter a number between 1 and 100!', 'red');
  } else if (guess === randomNumber) {
    handleWin();
  } else {
    handleWrongGuess(guess);
  }
  guessInput.value = '';
});

// Handle Correct Guess
function handleWin() {
  showMessage(`Correct! The number was ${randomNumber}`, 'green');
  document.body.style.backgroundColor = '#28a745';
  if (score > highScore) {
    highScore = score;
    highScoreDisplay.textContent = highScore;
  }
  disableGame();
}

// Handle Incorrect Guess
function handleWrongGuess(guess) {
  if (score > 1) {
    showMessage(guess > randomNumber ? 'Too high!' : 'Too low!', 'orange');
    score--;
    scoreDisplay.textContent = score;
  } else {
    showMessage(`Game Over! The number was ${randomNumber}`, 'red');
    document.body.style.backgroundColor = '#dc3545';
    disableGame();
  }
}

// Reset Game
resetBtn.addEventListener('click', resetGame);

function resetGame() {
  score = 10;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  showMessage('New game started. Try to guess!', 'black');
  scoreDisplay.textContent = score;
  document.body.style.backgroundColor = '#6e7f80';
  enableGame();
}

// Helper Functions
function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function disableGame() {
  guessInput.disabled = true;
  guessBtn.disabled = true;
}

function enableGame() {
  guessInput.disabled = false;
  guessBtn.disabled = false;
}
