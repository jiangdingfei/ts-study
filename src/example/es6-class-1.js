// function Point(x,y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.getPostion = function () {
//     return '(' + this.x + ', ' + this.y + ')'
// }
// var p1 = new Point(2, 3)
// console.log(p1)
// console.log(p1.getPostion())

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getPosition () {
        return `(${this.x}, ${this.y})`
    }
}
const p1 = new Point(1,2)
console.log(p1)
console.log(p1 instanceof Point)
console.log(p1.hasOwnProperty('x'))
console.log(p1.hasOwnProperty('getPosition'))
console.log(p1.__proto__.hasOwnProperty('getPosition'))