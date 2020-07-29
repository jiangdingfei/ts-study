// const s1 = Symbol()
// console.log(s1, 's')
// const s2 = Symbol()
// console.log(s1 === s2)

// const s3 = Symbol('lison')
//
// console.log(s3, 's3')

import instantiate = WebAssembly.instantiate;

const s4 = Symbol()

let prop = 'name'
const info = {
    [prop]: 'lison'
}
console.log(info)

const s5 = Symbol('name')
const info2 = {
    [s5]: 'haha',
    age: 18,
    sex: 'F'
}
console.log(info2)
console.log(info2[s5])

// 使用for...in 遍历对象
for (const key in info2 ) {
    console.log(key)
}
// 使用Object.keys()方法，遍历对象

console.log(Object.getOwnPropertyNames(info2))

console.log(JSON.stringify(info2));

// 上述4个方法都拿不到symbol

// // 下面两个方法可以拿到symbol
// console.log(Object.getOwnPropertySymbols(info2))
// console.log(Reflect.ownKeys(info2), 'reflect')

// Symbol.for() 全局搜索是否创建过name为'lison'都symbol（iframe，websocket， 等等）
// const s8 = Symbol.for('lison')
// const s9 = Symbol.for('lison')
// console.log(s8 === s9,) // true

// Symbol.keyFor() // 拿symbol都key



// es6 11个内置Symbol属性
// Symbol.hasInstance 当其他对象使用instanceof方法时，会调用Symbol.hasInstance 方法
// const obj1 = {
//     [Symbol.hasInstance](otherObj:any) {
//         console.log(otherObj)
//     }
// }
// console.log({a: 'a'} instanceof <any>obj1, 'hasInstance')


// Symbol.isConcatSpreadable(可读写当布尔值，是否扁平化)
// let arr: any[] = [1, 2]
// // @ts-ignore
// console.log([].concat(arr, [3,5]))
// console.log(arr[Symbol.isConcatSpreadable], 'inConcatSpreadable')
// // @ts-ignore
// arr[Symbol.isConcatSpreadable] = false
// // @ts-ignore
// console.log([].concat(arr, [3,5]))

// Symbol.species (浏览器里直接执行下面代码，和ts有区别，关于衍生对象）
// class C extends Array {
//     constructor(...args: any[]) {
//         super(...args);
//     }
//     // static get [Symbol.species] () {
//     //     return Array
//     // }
//     getName() {
//         return 'lison'
//     }
// }
// const c = new C(1,2,3)
// console.log(c, 'c')
// // a 叫做 c 的衍生对象
// const a = c.map(item => item+1)
// console.log(a, 'a')
// console.log(a instanceof C , 'a-c')
// console.log(a instanceof Array, 'a-Array')


// Symbol.match
// Symbol.replace
// Symbol.search
// Symbol.split
let obj3 = {
    [Symbol.match](string: string) {
        console.log(string.length)
    },
    [Symbol.split](string: string){
        console.log('split', string.length)
    }
}
'abcde'.match(<RegExp>obj3)

// Symbol.iterator
// const arr = [1,3,4]
// const iterator = arr[Symbol.iterator]()
// console.log(iterator)
// console.log(iterator.next())

// toPrimitive 类型转换时，调用
let obj4: unknown = {
    [Symbol.toPrimitive] (type: unknown) {
        console.log(type)
    }
}
// const res = (obj4 as number)++
// ts和js有区别， ts 为 default ， js 为 string
// const res = `abc${obj4}`

// Symbol.toString ，调用toString方法时执行
let obj5 = {
    // get [Symbol.toStringTag] () {
    //     return 'lison'
    // }
    [Symbol.toStringTag]: 'lison'
}
// console.log(obj5.toString())


// Symbol.unscopables
const obj6 = {
    a: 'a',
    b: 'b'
}
console.log(Array.prototype[Symbol.unscopables])