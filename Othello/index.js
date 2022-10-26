// 2D Array representing Board
let boardArray = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];
numberOfWhite = 2;
numberOfBlack = 2;

// Updating Board
let UpdateButtonID;
function boardUpdate() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            UpdateButtonID = "cell-" + i + "-" + j;
            if (boardArray[i][j] == 0)
                document.getElementById(UpdateButtonID).className = "cells";
            else if (boardArray[i][j] == 1)
                document.getElementById(UpdateButtonID).className =
                    "cells white";
            else if (boardArray[i][j] == 2)
                document.getElementById(UpdateButtonID).className =
                    "cells black";
        }
    }
}

// Adding all Buttons to board
let node;
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        node = document.createElement("BUTTON");
        node.className = "cells";
        node.id = "cell-" + i + "-" + j;
        node.setAttribute("x-value", i);
        node.setAttribute("y-value", j);
        document.getElementById("board").appendChild(node);
    }
}
boardUpdate();

// variables for Click listener to the board
let clickedX, clickedY;
let turn = false;
let clickedButtonID;
const board = document.querySelector("#board");

// Click listener to the board
board.addEventListener("click", (e) => {
    if (e.target.id != "board") {
        clickedX = e.target.getAttribute("x-value");
        clickedY = e.target.getAttribute("y-value");

        if (boardArray[clickedX][clickedY] == 0) {
            console.log(clickedX, clickedY);
            if (turn) moveWhite(clickedX, clickedY);
            else moveBlack(clickedX, clickedY);
            boardUpdate();
        }
    }
});

// Defining a White move
function moveWhite(X, Y) {
    let x = parseInt(X);
    let y = parseInt(Y);
    if (
        (x - 1 >= 0 && boardArray[x - 1][y] == 2) ||
        (x + 1 <= 7 && boardArray[x + 1][y] == 2) ||
        (y - 1 >= 0 && boardArray[x][y - 1] == 2) ||
        (y + 1 <= 7 && boardArray[x][y + 1] == 2) ||
        (y + 1 <= 7 && x + 1 <= 7 && boardArray[x + 1][y + 1] == 2) ||
        (y - 1 >= 0 && x + 1 <= 7 && boardArray[x + 1][y - 1] == 2) ||
        (y + 1 <= 7 && x - 1 >= 0 && boardArray[x - 1][y + 1] == 2) ||
        (y - 1 >= 0 && x - 1 >= 0 && boardArray[x - 1][y - 1] == 2)
    ) {
        boardArray[x][y] = 1;
        turn = false;
        numberOfWhite++;
        document.getElementById("turn-teller").innerText = "Black's Turn";
        checkFlips(x, y, 1);
    } else console.log("Not a Valid Move");
}

// Defining a Black move
function moveBlack(X, Y) {
    let x = parseInt(X);
    let y = parseInt(Y);
    if (
        (x - 1 >= 0 && boardArray[x - 1][y] == 1) ||
        (x + 1 <= 7 && boardArray[x + 1][y] == 1) ||
        (y - 1 >= 0 && boardArray[x][y - 1] == 1) ||
        (y + 1 <= 7 && boardArray[x][y + 1] == 1) ||
        (y + 1 <= 7 && x + 1 <= 7 && boardArray[x + 1][y + 1] == 1) ||
        (y - 1 >= 0 && x + 1 <= 7 && boardArray[x + 1][y - 1] == 1) ||
        (y + 1 <= 7 && x - 1 >= 0 && boardArray[x - 1][y + 1] == 1) ||
        (y - 1 >= 0 && x - 1 >= 0 && boardArray[x - 1][y - 1] == 1)
    ) {
        boardArray[x][y] = 2;
        turn = true;
        numberOfBlack++;
        document.getElementById("turn-teller").innerText = "White's Turn";
        checkFlips(x, y, 2);
    } else console.log("Not a Valid Move");
}

// Check Flips
function checkFlips(X, Y, Mover) {
    let x = parseInt(X);
    let y = parseInt(Y);
    let mover = parseInt(Mover);
    let valueChanger;
    let xx, yy, tempx, tempy;

    if (Mover == 1) valueChanger = 1;
    else valueChanger = -1;

    // Check North
    xx = -100;
    yy = -100;
    for (let i = x - 1; i > -1; i--) {
        if (boardArray[i][y] == mover) {
            xx = i;
            break;
        }
        if (boardArray[i][y] == 0) {
            break;
        }
    }
    if (xx != -100)
        for (let i = x - 1; i > xx; i--) {
            boardArray[i][y] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
        }

    // Check South
    xx = -100;
    yy = -100;
    for (let i = x + 1; i < 8; i++) {
        if (boardArray[i][y] == mover) {
            xx = i;
            break;
        }
        if (boardArray[i][y] == 0) {
            break;
        }
    }
    if (xx != -100)
        for (let i = x + 1; i < xx; i++) {
            boardArray[i][y] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
        }

    // Check West
    xx = -100;
    yy = -100;
    for (let i = y - 1; i > -1; i--) {
        if (boardArray[x][i] == mover) {
            yy = i;
            break;
        }
        if (boardArray[x][i] == 0) {
            break;
        }
    }
    if (yy != -100)
        for (let i = y - 1; i > yy; i--) {
            boardArray[x][i] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
        }

    // Check East
    xx = -100;
    yy = -100;
    for (let i = y + 1; i < 8; i++) {
        if (boardArray[x][i] == mover) {
            yy = i;
            break;
        }
        if (boardArray[x][i] == 0) {
            break;
        }
    }
    if (yy != -100)
        for (let i = y + 1; i < yy; i++) {
            boardArray[x][i] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
        }

    // Check North West
    xx = -100;
    yy = -100;
    tempx = x - 1;
    tempy = y - 1;
    while (tempx > -1 && tempy > -1) {
        if (boardArray[tempx][tempy] == mover) {
            xx = tempx;
            yy = tempy;
            break;
        }
        if (boardArray[tempx][tempy] == 0) {
            break;
        }
        tempx--;
        tempy--;
    }
    tempx = x - 1;
    tempy = y - 1;
    if (xx != -100)
        while (tempx > xx && tempy > yy) {
            boardArray[tempx][tempy] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
            tempx--;
            tempy--;
        }

    // Check North East
    xx = -100;
    yy = -100;
    tempx = x - 1;
    tempy = y + 1;
    while (tempx > -1 && tempy < 8) {
        if (boardArray[tempx][tempy] == mover) {
            xx = tempx;
            yy = tempy;
            break;
        }
        if (boardArray[tempx][tempy] == 0) {
            break;
        }
        tempx--;
        tempy++;
    }
    tempx = x - 1;
    tempy = y + 1;
    if (xx != -100)
        while (tempx > xx && tempy < yy) {
            boardArray[tempx][tempy] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
            tempx--;
            tempy++;
        }

    // Check South West
    xx = -100;
    yy = -100;
    tempx = x + 1;
    tempy = y - 1;
    while (tempx < 8 && tempy > -1) {
        if (boardArray[tempx][tempy] == mover) {
            xx = tempx;
            yy = tempy;
            break;
        }
        if (boardArray[tempx][tempy] == 0) {
            break;
        }
        tempx++;
        tempy--;
    }
    tempx = x + 1;
    tempy = y - 1;
    if (xx != -100)
        while (tempx < xx && tempy > yy) {
            boardArray[tempx][tempy] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
            tempx++;
            tempy--;
        }

    // Check North East
    xx = -100;
    yy = -100;
    tempx = x + 1;
    tempy = y + 1;
    while (tempx < 8 && tempy < 8) {
        if (boardArray[tempx][tempy] == mover) {
            xx = tempx;
            yy = tempy;
            break;
        }
        if (boardArray[tempx][tempy] == 0) {
            break;
        }
        tempx++;
        tempy++;
    }
    tempx = x + 1;
    tempy = y + 1;
    if (xx != -100)
        while (tempx < xx && tempy < yy) {
            boardArray[tempx][tempy] = mover;
            numberOfWhite += valueChanger;
            numberOfBlack -= valueChanger;
            tempx++;
            tempy++;
        }

    // Count Updater
    document.getElementById("white-count").innerText =
        "White Count = " + numberOfWhite;
    document.getElementById("black-count").innerText =
        "Black Count = " + numberOfBlack;

    // Check Winning Conditions
    if (numberOfBlack == 0) {
        document.getElementById("turn-teller").innerText = "White Wins";
        GameOver();
    }

    if (numberOfWhite == 0) {
        document.getElementById("turn-teller").innerText = "Black Wins";
        GameOver();
    }
    if (numberOfBlack + numberOfWhite == 64) {
        if (numberOfBlack > numberOfWhite) {
            document.getElementById("turn-teller").innerText = "Black Wins";
            GameOver();
        } else if (numberOfWhite > numberOfBlack) {
            document.getElementById("turn-teller").innerText = "White Wins";
            GameOver();
        } else {
            document.getElementById("turn-teller").innerText = "Its a Draw.";
            GameOver();
        }
    }
}

// Game Over
function GameOver() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            ButtonID = "cell-" + i + "-" + j;
            document.getElementById(ButtonID).disabled = true;
        }
    }
}
