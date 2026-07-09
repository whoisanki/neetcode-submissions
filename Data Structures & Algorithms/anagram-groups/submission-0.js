class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mp = new Map();

        for (let ele of strs) {
            let sortedEle = ele.split("").sort().join("");
            if (!mp.has(sortedEle)) {
                mp.set(sortedEle, []);
            }

            mp.get(sortedEle).push(ele);
        }

        return Array.from(mp.values());
    }
}
