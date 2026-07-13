class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let profit = 0;

        for (let i = 0; i < n; i++) {
           if(prices[i] > prices[i-1]){
            let diff = prices[i] - prices[i -1]
            profit = profit + diff
           }
        }

        return profit
    }
}
