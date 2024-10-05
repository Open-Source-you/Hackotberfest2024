let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;
    
    const resultElement = document.getElementById('result');

    if (userGuess === randomNumber) {
        resultElement.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('reset').style.display = 'inline';
        document.getElementById('submit').disabled = true;
    } else if (userGuess < randomNumber) {
        resultElement.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        resultElement.textContent = 'Too high! Try again.';
    }
});

document.getElementById('reset').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 101);
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('submit').disabled = false;
    this.style.display = 'none';
});
