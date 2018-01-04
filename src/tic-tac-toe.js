const FIRST_PLAYER_CHARACTER = 'x';
const SECOND_PLAYER_CHARACTER = 'o';
const EMPTY_CHARACTER = null;

class TicTacToe {
    constructor(gamepadSize = 3) {
        this.currentPlayerSymbol = FIRST_PLAYER_CHARACTER;
        this.gamepad = new Array(gamepadSize)
            .fill(EMPTY_CHARACTER)
            .map(row => arrayOfZeros(gamepadSize, EMPTY_CHARACTER));
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.gamepad[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol = this.currentPlayerSymbol === FIRST_PLAYER_CHARACTER
            ? SECOND_PLAYER_CHARACTER
            : FIRST_PLAYER_CHARACTER;
    }

    isFinished() {
        return this.gamepad.every(row => row.every(cell => cell !== EMPTY_CHARACTER));
    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, columnIndex) {
        return this.gamepad[rowIndex][columnIndex];
    }
}

function arrayOfZeros(size = 3, placeholder = null) {
    return new Array(size).fill(placeholder);
}

module.exports = TicTacToe;
