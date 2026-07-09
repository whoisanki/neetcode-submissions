class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let n = strs.length;
        let str = strs[0];

        for (let i = 1; i < n; i++) {
            let ltIn = 0;
            let nextPrefix = "";
            while (ltIn < str.length && ltIn < strs[i].length) {
                if (str[ltIn] === strs[i][ltIn]) {
                    nextPrefix = nextPrefix + str[ltIn];
                    ltIn++;
                } else {
                    break;
                }
            }
            str = nextPrefix;
        }

        return str;
    }
}