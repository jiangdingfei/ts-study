// // 使用泛型约束
// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// console.log(getArray<number>(123,4).map((item) => item.toFixed()))

// const getArray = <T,U>(param1: T, param2: U, times: number ): [T, U][] => {
//     return new Array(times).fill([param1, param2])
// }
// console.log(getArray(1, 'a', 3))
// getArray<number, string>(1,'a', 3).forEach((item) => {
//     console.log(item[0])
//     console.log(item[1].length)
// })

// let getArray: <T>(arg: T, times: number) => T[]
// getArray = (arg: any, times: number) =>{
//     return new Array(times).fill(arg)
// }
// getArray(123, 3).map((item) => item.toString().length)

// type GetArray = <T>(arg: T, times: number) => T[]
// let getArray: GetArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }

// 用接口定义的，保存时，Tslint把它自动转成类型别名
// 接口定义的混合类型
// interface GetArray<T> {
//     (arg: any, times: number): T[]
//     array: T[]
// }

// // 泛型约束
// interface ValueWithLength {
//     length: number
// }
// const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg)
// }
// getArray([1,2], 3)
// getArray('123', 3)
// getArray({
//     length: 3
// },3)

// // 在泛型约束中使用参数(结合索引类型)
// const getProps = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName]
// }
// const objs = {
//     a: 'a',
//     b: 'b'
// }
// getProps(objs, 'b')