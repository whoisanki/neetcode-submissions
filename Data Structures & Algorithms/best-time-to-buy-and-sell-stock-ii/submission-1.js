class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let min = 0; // index not val
        let profit = 0;
        let setArr = []

        for (let i = 0; i < n; i++) {
            if (prices[i] > prices[min]) {
                let diff = prices[i] - prices[min];
                profit = Math.max(profit, diff);
            }
            if (prices[i] < prices[min]) {
                min = i;
            }
            if (i < n - 1 && prices[i] < prices[i + 1]) {
                let diff = prices[i + 1] - prices[i];
                setArr.push(diff);
            }
        }
        let setSum = 0;

        for (let i = 0; i < setArr.length; i++) {
            setSum = setSum + setArr[i];
        }

        return Math.max(setSum, profit);
    }
}
