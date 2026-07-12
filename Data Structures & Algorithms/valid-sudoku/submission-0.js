class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = board.length;
        let col = board[0].length;
        for (let i = 0; i < row; i++) {
            let mp = new Map();
            for (let j = 0; j < col; j++) {
                if (board[i][j] === ".") {
                    continue;
                }
                if (!mp.has(board[i][j])) {
                    mp.set(board[i][j], 1);
                } else {
                    return false;
                }
            }
        }

        for (let i = 0; i < col; i++) {
            let mp = new Map();
            for (let j = 0; j < row; j++) {
                const ele = board[j][i];
                if (ele === ".") {
                    continue;
                }
                if (!mp.has(ele)) {
                    mp.set(ele, 1);
                } else {
                    return false;
                }
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === ".") continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }

        return true;
    }
}
