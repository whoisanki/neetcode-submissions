class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let n = nums.length;
        let mp = new Map()
        let minBar = Math.floor(n/3)

        for(let i = 0; i< n;i++){
            let val = nums[i]
            if(!mp.has(val)){
                mp.set(val, 1)
            }else{
                let existingVal = mp.get(val)
                mp.set(val, existingVal + 1)
            }
        }

        const arr = []

        for(let [key, val] of mp){
            if(val > minBar){
                arr.push(key)
            }
        }

        return arr
    }
}
