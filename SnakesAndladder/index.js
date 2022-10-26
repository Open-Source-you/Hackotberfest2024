// Getting Front End Components using IDs
const redPlaceholder = document.getElementById("red-placeholder");
const blackPlaceholder = document.getElementById("black-placeholder");
const board = document.getElementById("board");
const rollButton = document.getElementById("roll");
const rolledNumberDisplay = document.getElementById("roll-display");
const turnTeller = document.getElementById("turn-teller");
const timeoutTime = 200;

// Inserting all Cells with corresponding IDs
let node, cellID;
for (let i = 10; i > 0; i--) {
    if (i % 2 == 0) {
        for (let j = 0; j < 10; j++) {
            node = document.createElement("DIV");
            node.id = "cell-" + (10 * i - j);
            board.appendChild(node);
        }
    } else {
        for (let j = 0; j < 10; j++) {
            node = document.createElement("DIV");
            node.id = "cell-" + (10 * (i - 1) + j + 1);
            board.appendChild(node);
        }
    }
}

// Setting al Ladders and Snakes
let BoardCell = [];
for (let i = 1; i <= 100; i++) {
    BoardCell[i] = i;
}
// Setting Ladders
BoardCell[1] = 38;
BoardCell[4] = 14;
BoardCell[9] = 31;
BoardCell[21] = 42;
BoardCell[28] = 84;
BoardCell[51] = 67;
BoardCell[71] = 91;
BoardCell[80] = 100;
// Setting Snakes
BoardCell[98] = 79;
BoardCell[95] = 75;
BoardCell[93] = 73;
BoardCell[87] = 24;
BoardCell[64] = 60;
BoardCell[62] = 19;
BoardCell[54] = 34;
BoardCell[17] = 7;

// Setting Initial State
let turn = true;
let redPosition = 0;
let blackPosition = 0;
UpdateBoard();

// Updating the board
function UpdateBoard() {
    blackPlaceholder.className = " ";
    redPlaceholder.className = " ";
    for (let i = 1; i <= 100; i++) {
        cellID = "cell-" + i;
        document.getElementById(cellID).className = "";
    }
    if (redPosition != 0) {
        cellID = "cell-" + redPosition;
        document.getElementById(cellID).className = "red";
    } else redPlaceholder.className = "red";
    if (blackPosition != 0) {
        cellID = "cell-" + blackPosition;
        document.getElementById(cellID).className = "black";
    } else blackPlaceholder.className = "black";
}

// Clicking on Roll
let rolledNumber;
rollButton.addEventListener("click", (e) => {
    rolledNumber = Math.floor(Math.random() * 6) + 1;
    console.log(rolledNumber);
    if ((turn ? redPosition : blackPosition) + rolledNumber > 100) {
        rolledNumberDisplay.innerText = rolledNumber;
        turn = !turn;
        turn
            ? (turnTeller.innerText = "Player 1's Turn")
            : (turnTeller.innerText = "Player 2's Turn");
    } else {
        rolledNumberDisplay.innerText = rolledNumber;
        rollButton.disabled = true;
        setTimeout(moving, timeoutTime);
    }
});

// Move
function moving() {
    if (rolledNumber == -1) {
        if (redPosition == 100) {
            turnTeller.innerText = "Player 1 Wins";
            return;
        }
        if (blackPosition == 100) {
            turnTeller.innerText = "Player 2 Wins";
            return;
        }
        if (redPosition == blackPosition)
            turn ? (blackPosition = 0) : (redPosition = 0);
        turn = !turn;
        turn
            ? (turnTeller.innerText = "Player 1's Turn")
            : (turnTeller.innerText = "Player 2's Turn");
        rollButton.disabled = false;
        UpdateBoard();
    } else if (rolledNumber == 0) {
        turn
            ? (redPosition = BoardCell[redPosition])
            : (blackPosition = BoardCell[blackPosition]);
        rolledNumber--;
        setTimeout(moving, timeoutTime);
        UpdateBoard();
    } else {
        turn ? redPosition++ : blackPosition++;
        rolledNumber--;
        setTimeout(moving, timeoutTime);
        UpdateBoard();
    }
}
