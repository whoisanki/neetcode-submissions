class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let val = JSON.stringify(strs)
       let encoded = btoa(val)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let val = atob(str)
        let decoded = JSON.parse(val)
        return decoded

    }
}
