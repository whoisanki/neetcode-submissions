class MyHashSet {
    constructor() {
        this.set = Array.from({ length: 1000000 });
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.set.includes(key)) {
            this.set.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let i = this.set.indexOf(key)
        if(i > -1){
            this.set.splice(i,1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
       return this.set.includes(key) ? true : false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
