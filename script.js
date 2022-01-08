
var all_squares = document.getElementsByClassName('square')
var x_turn = true

function squareIsFilled(target) {
    return target.innerHTML === 'X' | target.innerHTML === 'O'
}

function whenSquareIsClicked(e) {
    if (squareIsFilled(e.target)) {
        return
    } else {
        if (x_turn) {
            e.target.innerHTML = 'X'
        } else {
            e.target.innerHTML = 'O'
        }
        x_turn = !x_turn
    }
}

for (var square of all_squares) {
    square.addEventListener('click', whenSquareIsClicked)
}