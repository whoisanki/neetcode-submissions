class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let mp = new Map();
        let n = nums.length;

        for (let i = 0; i < n; i++) {
            mp.set(nums[i], false);
        }

        let longest = 0;

        for (let i = 0; i < n; i++) {
            let curr = 1;

            let next = nums[i] + 1;
            while (mp.has(next) && mp.get(next) === false) {
                mp.set(next, true);
                curr++;
                ++next;
            }

            let prev = nums[i] - 1;
            while (mp.has(prev) && mp.get(prev) === false) {
                mp.set(prev, true);
                curr++;
                --prev;
            }

            longest = Math.max(curr, longest);
        }

        return longest;
    }
}
