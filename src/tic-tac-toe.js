const FIRST_PLAYER_CHARACTER = 'x';
const SECOND_PLAYER_CHARACTER = 'o';
const EMPTY_CHARACTER = null;
const PLAYERS_CHARACTERS = [
    FIRST_PLAYER_CHARACTER,
    SECOND_PLAYER_CHARACTER,
];

class TicTacToe {
    constructor(gamepadSize = 3) {
        this.currentPlayerSymbol = FIRST_PLAYER_CHARACTER;
        this.gamepad = new Array(gamepadSize)
            .fill(EMPTY_CHARACTER)
            .map(row => arrayOfZeros(gamepadSize, EMPTY_CHARACTER));
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        const { gamepad } = this;
        const currChar = this.currentPlayerSymbol;

        const isAlreadySet = PLAYERS_CHARACTERS.includes(gamepad[rowIndex][columnIndex]);
        if (isAlreadySet) {
            return;
        }

        gamepad[rowIndex][columnIndex] = currChar;
        this.currentPlayerSymbol = currChar === FIRST_PLAYER_CHARACTER
            ? SECOND_PLAYER_CHARACTER
            : FIRST_PLAYER_CHARACTER;

        this.findWinLinesAndUpdateStatus();
    }

    isFinished() {
        return Boolean(this.getWinner() || this.isDraw());
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.gamepad.every(row => row.every(cell => cell !== EMPTY_CHARACTER));
    }

    isDraw() {
        return !this.winner && this.noMoreTurns();
    }

    getFieldValue(rowIndex, columnIndex) {
        return this.gamepad[rowIndex][columnIndex];
    }

    findWinLinesAndUpdateStatus() {
        const { gamepad } = this;

        gamepad.forEach((row, rowIndex) => {
            const isEdgeRow = rowIndex === 0 || rowIndex === gamepad.length - 1;
            row.forEach((currChar, columnIndex) => {
                const isHorizontalMatch =
                    currChar === gamepad[rowIndex][columnIndex - 1] &&
                    currChar === gamepad[rowIndex][columnIndex + 1];
                const isVerticalMatch =
                    !isEdgeRow &&
                    currChar === gamepad[rowIndex - 1][columnIndex] &&
                    currChar === gamepad[rowIndex + 1][columnIndex];
                const isDiagonalMatch =
                    !isEdgeRow && (
                        currChar === gamepad[rowIndex - 1][columnIndex - 1] &&
                        currChar === gamepad[rowIndex + 1][columnIndex + 1]
                        ||
                        currChar === gamepad[rowIndex - 1][columnIndex + 1] &&
                        currChar === gamepad[rowIndex + 1][columnIndex - 1]
                    );
                if (PLAYERS_CHARACTERS.includes(currChar) &&
                    (isHorizontalMatch || isVerticalMatch || isDiagonalMatch)) {
                    this.winner = currChar;
                }
            })
        })
    }
}

function arrayOfZeros(size = 3, placeholder = null) {
    return new Array(size).fill(placeholder);
}

module.exports = TicTacToe;
