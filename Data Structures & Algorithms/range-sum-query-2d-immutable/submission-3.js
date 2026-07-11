class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        this.preFix = matrix.map(row => Array.from({length: row.length}).fill(0));

        const n = matrix.length;
        const m = matrix[0].length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                const top = i > 0 ? this.preFix[i-1][j] : 0
                const left = j > 0 ? this.preFix[i][j -1] : 0
                const topLeft = (i > 0 && j > 0) ? this.preFix[i-1][j-1] : 0
                this.preFix[i][j] = matrix[i][j] + top + left - topLeft
            }
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
        let total = this.preFix[row2][col2]
        
        let TL = (row1 > 0 && col1 > 0) ? this.preFix[row1 - 1][col1 - 1] : 0
        let TR = row1 > 0 ? this.preFix[row1 - 1][col2] : 0
        let BL = col1 > 0 ? this.preFix[row2][col1 - 1] : 0
        
        return total - TR - BL + TL
    }
}