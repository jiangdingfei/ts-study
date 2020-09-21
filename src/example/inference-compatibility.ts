// let fed = 'lison'
// fed = 123


// 上下文类型
// 等号左边推论右边类型
window.onmousedown = (mouseEvent: MouseEvent) => {
  console.log(mouseEvent)
}

// 右边的一定需要包含左边的有的所有类型
interface InfoInterface {
  name: string
}

let infos: InfoInterface
const infos1 = { name: 'lison' }
const infos2 = { age: 18 }
const infos3 = { name: 'lison', age: 18 }
infos = infos1
infos = infos3

// 函数的兼容性
// 参数个数
// let x = (a: number) => 0
// let y = (b: number, c: string) => 0
// 右边函数参数个数一定要小于左边函数个数
// x = y
// y = x
// 示例
// const arrs = [1,3,5];
// // forEach方式实质上有3个参数
// arrs.forEach(item => {
//   console.log(item)
// })

// 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// x = y

// // 可选参数和剩余参数
// const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
//   return callback(...arr)
// }
// // 剩余参数
// const cc = getSum([1,2, 3], (...args: number[]): number => args.reduce((a,b) => a + b, 1))
// console.log(cc, 'a')
//
// // 可选参数
// const res2 = getSum([1,2,3], (arg1: number, arg2: number, arg3: number): number => arg1 + arg2 + arg3)

// 函数参数双向协变

