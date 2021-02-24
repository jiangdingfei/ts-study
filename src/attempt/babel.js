
// Object身上添加entries方法
if (typeof Object.entries !== 'function') {
    Object.entries = function (target) {
        return Object.keys(target).map(key => ([key, target[key]]))
    }
}
// 处理myFlat方法
if (typeof Array.prototype.myFlat !== 'function') {
    Array.prototype.myFlat = function (num) {
        for (let i = 0; i < this.length; i++) {
            const element= this[i]
            if (Array.isArray(element) && num > 0) {
                const r = element.myFlat(num -1)
                this.splice(i, 1, ...r)
                i = i + r.length -1
            }
        }
        return this;
    }
}


