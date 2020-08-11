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

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     getPosition () {
//         return `(${this.x}, ${this.y})`
//     }
// }
// const p1 = new Point(1,2)
// console.log(p1)
// console.log(p1 instanceof Point)
// console.log(p1.hasOwnProperty('x'))
// console.log(p1.hasOwnProperty('getPosition'))
// console.log(p1.__proto__.hasOwnProperty('getPosition'))

// var info = {
//     _age: 18,
//     // 存值函数
//     set age (newValue) {
//         if (newValue > 18) {
//             console.log('怎么变老了')
//         } else {
//             console.log('哈哈，我还年轻')
//         }
//         this._age = newValue
//     },
//     // 取值函数
//     get age () {
//         console.log('你问我年龄干嘛')
//         return this._age
//     }
// }
// console.log(info.age)
// info.age = 17

// class Info {
//     constructor (age) {
//         this._age = age
//     }
//     set age(newAge) {
//         console.log('new age is:' + newAge)
//         this._age = newAge
//     }
//     get age() {
//         return this._age
//     }
// }
// const infos = new Info(18)
// infos.age = 17
// console.log(infos.age)

// 定义类的两种方式
// // 方式一
// const Infos = class {
//     constructor() {
//     }
// }
// // 方式二
// class Info {
//
// }

// 类的静态方法
// class Point {
//     constructor (x,y) {
//         this.x = x;
//         this.y = y;
//     }
//     getPosition () {
//         return `(${this.x}, ${this.y})`
//     }
//     static getClassName () {
//         return Point.name
//     }
// }
// const p = new Point(1,2)
// console.log(p.getPosition())
// console.log(Point.getClassName())

class Parent {
    constructor () {
      if (new.target === Parent) {
        throw new Error('不能实例化')
      }
    }
}
class Child extends Parent {
  constructor() {
    super()
  }
}
const c = new Child()
// const f = new Parent()