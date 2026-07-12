class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let pre = [];
        let post = [];

        let res = [];

        for (let i = 0; i < n; i++) {
            if (i === 0) {
                pre[i] = nums[i];
            } else {
                pre[i] = nums[i] * pre[i - 1];
            }
        }

        for (let i = n - 1; i >= 0; i--) {
            if (i === n - 1) {
                post[i] = nums[i];
            } else {
                post[i] = nums[i] * post[i + 1];
            }
        }

        for (let i = 0; i < n; i++) {
            if (i === 0) {
                res[i] = post[i + 1];
            } else if (i === n - 1) {
                res[i] = pre[i - 1];
            } else {
                res[i] = pre[i - 1] * post[i + 1];
            }
        }

        return res
    }
}
