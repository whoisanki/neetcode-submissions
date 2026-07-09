class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let index = 0;
        let n = nums.length;
        let ans = [];

        for (let i = 0; i < n * 2; i++) {
            ans[i] = nums[index];

            if (index === n - 1) {
                index = 0
            }else{
                index++
            }
        }

        return ans
    }
}
