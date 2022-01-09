
var all_squares = document.getElementsByClassName('square')
var x_turn = true
var game_is_over = false
var winner = null
var board = [['', '', ''],
['', '', ''],
['', '', '']]

function squareIsFilled(target) {
    return target.innerHTML === 'X' | target.innerHTML === 'O'
}

function updateBoardData(className, letter) {
    if (className === "square top-left-square") {
        board[0][0] = letter
    } else if (className === "square top-middle-square") {
        board[0][1] = letter
    } else if (className === "square top-right-square") {
        board[0][2] = letter
    } else if (className === "square middle-left-square") {
        board[1][0] = letter
    } else if (className === "square middle-middle-square") {
        board[1][1] = letter
    } else if (className === "square middle-right-square") {
        board[1][2] = letter
    } else if (className === "square bottom-left-square") {
        board[2][0] = letter
    } else if (className === "square bottom-middle-square") {
        board[2][1] = letter
    } else if (className === "square bottom-right-square") {
        board[2][2] = letter
    }
}

function columnWins(col) {
    if (board[0][col] === '') { return false }
    if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return true
    } else {
        return false
    }
}

function rowWins(row) {
    if (board[row][0] === '') { return false }
    if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        return true
    } else {
        return false
    }
}

function diagonalLeftToRightWins() {
    if (board[0][0] === '') { return false }
    if (board[0][0] === board[1][1] & board[1][1] === board[2][2]) {
        return true
    } else {
        return false
    }
}

function diagonalRightToLeftWins() {
    if (board[0][2] === '') { return false }
    if (board[0][2] === board[1][1] & board[1][1] === board[2][0]) {
        return true
    } else {
        return false
    }
}

function diagonalWins() {
    if (diagonalLeftToRightWins() | diagonalRightToLeftWins()) {
        return true
    } else {
        return false
    }
}

function isAWinner() {
    for (var x = 0; x <= 2; x++) {
        if (rowWins(x)) {
            return true
        } else if (columnWins(x)) {
            return true
        }
    }
    if (diagonalWins()) {
        return true
    }
    return false
}

function boardIsFull() {
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if (board[row][col] === '') {
                return false
            }
        }
    }
    return true
}

function setWinner() {
    if (x_turn === true) {
        winner = 'X'
    } else {
        winner = 'O'
    }
}

function displayWinner() {
    var display = document.querySelector('.winner-display')
    display.innerHTML = winner + ' wins!'
    display.style.visibility = 'visible'
}

function displayTieGame() {
    var display = document.querySelector('.winner-display')
    display.innerHTML = 'Cats game!'
    display.style.visibility = 'visible'
}

function whenSquareIsClicked(e) {
    if (squareIsFilled(e.target) | game_is_over) {
        return
    } else {
        if (x_turn) {
            e.target.innerHTML = 'X'
            updateBoardData(e.target.className, 'X')
            e.target.classList.add('animate')
        } else {
            e.target.innerHTML = 'O'
            updateBoardData(e.target.className, 'O')
        }
        if (isAWinner()) {
            game_is_over = true
            setWinner()
            displayWinner()
        } else if (boardIsFull()) {
            game_is_over = true
            displayTieGame()
        }
        x_turn = !x_turn
    }
}

for (var square of all_squares) {
    square.addEventListener('click', whenSquareIsClicked)
}