class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                if (nums[j] < nums[i]) {
                    let t = nums[i];
                    nums[i] = nums[j];
                    nums[j] = t;
                }
            }
        }
    }
}
