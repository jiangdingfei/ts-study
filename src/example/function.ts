// function  addFunc(arg1: number, arg2: number): number {
//     return arg1 + arg2
// }
// // es6箭头函数
// const addFunc2 = (arg1: number, arg2: number): number => arg1 + arg2

// let addFunc: (x: number, y: number) => number
//
// addFunc = (arg1: number, arg2: number): number => arg1 + arg2
// addFunc = (arg1: number, arg2: number) => arg1 + arg2
//
// let arg3 = 3
// addFunc = (arg1: number, arg2:number) => arg1 + arg2 + arg3

// 别名
type addFunc = (x:number, y: number) =>number

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number

// let addFunction: AddFunction
// addFunction = (x:number, y: number) => x + y
// addFunction = (x: number, y: number, z: number | undefined) => x + y + (z ? z : 0)
let addFunction = (x: number, y =3) => x + y
addFunction(1, 3)

// 函数重载（只能用function定义）
function handleData(x: string): string[]
function handleData(x: number): number[]
// 函数实体
function handleData(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item: string) => Number(item))
    }
}
console.log(handleData('abc'))
console.log(handleData(123))

interface User {
    name: string
    age: number
}

declare function test(para: User): number
declare function test(para: number, flag: boolean): number
const user: User = {
    name: "Jack",
    age: 666
}
// Error: 参数不匹配
// const res = attempt(user, false)