class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums;
        let mid = Math.floor(nums.length / 2);

        let left = this.sortArray(nums.slice(0, mid));
        let right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }

    merge(left, right) {
        let ln = left.length;
        let rn = right.length;
        let p1 = 0;
        let p2 = 0;

        let res = [];

        while (p1 < ln && p2 < rn) {
            if (left[p1] < right[p2]) {
                res.push(left[p1]);
                p1++;
            } else {
                res.push(right[p2]);
                p2++;
            }
        }

        return [...res, ...left.slice(p1), ...right.slice(p2)];
    }
}
