class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let mp = new Map();

        for (let i = 0; i < n; i++) {
            if (!mp.has(nums[i])) {
                mp.set(nums[i], 1);
            } else {
                let freq = mp.get(nums[i]);
                mp.set(nums[i], freq+1);
            }
        }

       let arr = Array.from(mp.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num])=> num)
        return arr;
    }
}
