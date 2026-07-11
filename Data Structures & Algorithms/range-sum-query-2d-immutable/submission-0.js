class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.Arr = [];

        let n = matrix.length;
        let m = matrix[0].length;

        for (let i = 0; i < n; i++) {
            let res = [];
            for (let j = 0; j < m; j++) {
                res.push(matrix[i][j]);
            }
            this.Arr.push(res);
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let sum = 0;
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum = sum + this.Arr[i][j];
            }
        }

        return sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
