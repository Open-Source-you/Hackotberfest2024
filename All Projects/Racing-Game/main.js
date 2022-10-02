const playerOne = document.querySelector('.player.one');
const playerTwo = document.querySelector('.player.two');
const diceOne = document.querySelector('.dice.one');
const diceTwo = document.querySelector('.dice.two');
const rollDiceOne = document.querySelector('.rollDiceOne');
const rollDiceTwo = document.querySelector('.rollDiceTwo');
const titleOne = document.querySelector('.title.one');
const titleTwo = document.querySelector('.title.two');
const playerWinner = document.querySelector('.playerWinner');
const finishLine = document.querySelector('.finishLine');
let activePlayer = playerOne;
let marginLeftOne = 0;
let marginLeftTwo = 0;

diceOne.style.background = 'url("img/dice-3.png") no-repeat center center';
diceOne.style.backgroundSize = 'cover';
diceTwo.style.background = 'url("img/dice-3.png") no-repeat center center';
diceTwo.style.backgroundSize = 'cover';

rollDiceOne.addEventListener('click', () => {
    if (activePlayer === playerOne) {
        let randomDiceNumber = Math.floor(Math.random() * 3 + 1);
        diceOne.style.background = `url('img/dice-${randomDiceNumber}.png') no-repeat center center`;
        diceOne.style.backgroundSize = 'cover';
        marginLeftOne += randomDiceNumber;
        titleOne.innerHTML = `You rolled ${randomDiceNumber}`;
        if (marginLeftOne >= 8) {
            marginLeftOne = 8;
            playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
            playerWinner.innerHTML = `<h2 class="playerWinner">Player One has won! Congrats!</h2><button class="playAgain">Play again</button>`;
            finishLine.classList.remove('hidden');
            activePlayer = false;
            document.body.addEventListener('click', e => {
                if (e.target.classList.contains('playAgain')) {
                    diceOne.style.background = 'url("img/dice-3.png") no-repeat center center';
                    diceOne.style.backgroundSize = 'cover';
                    diceTwo.style.background = 'url("img/dice-3.png") no-repeat center center';
                    diceTwo.style.backgroundSize = 'cover';
                    titleOne.innerHTML = '';
                    titleTwo.innerHTML = '';
                    playerWinner.innerHTML = '';
                    playerOne.style.marginLeft = `${marginLeftOne * 0}px`;
                    playerTwo.style.marginLeft = `${marginLeftTwo * 0}px`;
                    activePlayer = playerOne;
                    rollDiceOne.classList.add("active");
                    rollDiceTwo.classList.remove("active");
                    marginLeftOne = 0;
                    marginLeftTwo = 0;
                    playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
                    playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
                    finishLine.classList.add('hidden');
                }
            });
            return;
        } else {
            if (marginLeftOne === 3 || marginLeftOne === 6) {
                if (marginLeftOne === 3) {
                    marginLeftOne = 3;
                    playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
                    activePlayer = playerTwo;
                    rollDiceOne.classList.remove("active");
                    rollDiceTwo.classList.add("active");
                    setTimeout(() => {
                        marginLeftOne -= 1;
                        playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
                    }, 1000);
                } else if (marginLeftOne === 6) {
                    marginLeftOne = 6;
                    playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
                    activePlayer = playerTwo;
                    rollDiceOne.classList.remove("active");
                    rollDiceTwo.classList.add("active");
                    setTimeout(() => {
                        marginLeftOne -= 1;
                        playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
                    }, 1000);
                }
            } else {
                playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
                activePlayer = playerTwo;
                rollDiceOne.classList.remove("active");
                rollDiceTwo.classList.add("active");
            }
        }
    }
});

rollDiceTwo.addEventListener('click', () => {
    if (activePlayer === playerTwo) {
        let randomDiceNumber = Math.floor(Math.random() * 3 + 1);
        diceTwo.style.background = `url('img/dice-${randomDiceNumber}.png') no-repeat center center`;
        diceTwo.style.backgroundSize = 'cover';
        marginLeftTwo += randomDiceNumber;
        titleTwo.innerHTML = `You rolled ${randomDiceNumber}`;
        if (marginLeftTwo >= 8) {
            marginLeftTwo = 8;
            playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
            playerWinner.innerHTML = `<h2 class="playerWinner">Player Two has won! Congrats!</h2><button class="playAgain">Play again</button>`;
            finishLine.classList.remove('hidden');
            activePlayer = false;
            document.body.addEventListener('click', e => {
                if (e.target.classList.contains('playAgain')) {
                    diceOne.style.background = 'url("img/dice-3.png") no-repeat center center';
                    diceOne.style.backgroundSize = 'cover';
                    diceTwo.style.background = 'url("img/dice-3.png") no-repeat center center';
                    diceTwo.style.backgroundSize = 'cover';
                    titleOne.innerHTML = '';
                    titleTwo.innerHTML = '';
                    playerWinner.innerHTML = '';
                    playerOne.style.marginLeft = `${marginLeftOne * 0}px`;
                    playerTwo.style.marginLeft = `${marginLeftTwo * 0}px`;
                    activePlayer = playerOne;
                    rollDiceOne.classList.add("active");
                    rollDiceTwo.classList.remove("active");
                    marginLeftOne = 0;
                    marginLeftTwo = 0;
                    playerOne.style.marginLeft = `${marginLeftOne * 180}px`;
                    playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
                    finishLine.classList.add('hidden');
                }
            });
            return;
        } else {
            if (marginLeftTwo === 2 || marginLeftTwo === 5) {
                if (marginLeftTwo === 2) {
                    marginLeftTwo = 2;
                    playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
                    activePlayer = playerOne;
                    rollDiceOne.classList.add("active");
                    rollDiceTwo.classList.remove("active");
                    setTimeout(() => {
                        marginLeftTwo -= 1;
                        playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
                    }, 1000);
                } else if (marginLeftTwo === 5) {
                    marginLeftTwo = 5;
                    playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
                    activePlayer = playerOne;
                    rollDiceOne.classList.add("active");
                    rollDiceTwo.classList.remove("active");
                    setTimeout(() => {
                        marginLeftTwo -= 1;
                        playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
                    }, 1000);
                }
            } else {
                playerTwo.style.marginLeft = `${marginLeftTwo * 180}px`;
                activePlayer = playerOne;
                rollDiceOne.classList.add("active");
                rollDiceTwo.classList.remove("active");
            }
        }
    }
});