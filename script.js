let currentPlayer = 'X';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

function handleClick(index) {
    if (gameActive && boardState[index] === '') {
        boardState[index] = currentPlayer;
        document.getElementById('board').children[index].textContent = currentPlayer;
        if (checkWin()) {
            gameActive = false;
            document.getElementById('turn').textContent = `Player ${currentPlayer} wins!`;
        } else if (checkDraw()) {
            gameActive = false;
            document.getElementById('turn').textContent = 'It\'s a draw!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('turn').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return boardState[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return boardState.every(cell => {
        return cell !== '';
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    boardState = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('turn').textContent = `Player ${currentPlayer}'s turn`;
    Array.from(document.getElementById('board').children).forEach((cell, index) => {
        cell.textContent = '';
    });
}
