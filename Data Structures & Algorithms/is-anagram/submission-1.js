class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let n = s.length;
        let obj = {};
        let obj2 = {};
        for (let i = 0; i < n; i++) {
            if (obj[s[i]]) {
                obj[s[i]] = obj[s[i]] + 1;
            } else {
                obj[s[i]] = 1;
            }
            if (obj2[t[i]]) {
                obj2[t[i]] = obj2[t[i]] + 1;
            } else {
                obj2[t[i]] = 1;
            }
        }

        for(let i= 0; i < n; i ++){
           if(obj[s[i]] !== obj2[s[i]]){
            return false
           }
        }   

        return true
    }
}
