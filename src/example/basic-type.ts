// // 布尔类型
// let bool: boolean = false
//
// console.log(123)
//
// // 元祖类型  2.6版本后，元素不允许超出（超出的叫，越界元素）
// let tuple: [string, number, boolean];
// tuple = ['a', 1, false]
//
// // 枚举类型
// enum Roles {
//   SUPER_ADMIM = 2,
//   ADMIN,
//   USER
// }
// console.log(Roles.USER)
// console.log(Roles[2])
//
// // void类型
// const consleText = (text: string): void => {
//   console.log(text)
// }
//
// let v: void
// v = undefined

// null和undefined(undefined和null是任何类型的子类(除了never))

// let u: undefined
//
// u = undefined
//
// let n: null
// n = null

// // never类型（任何类型的子类型，其他类型都不能赋值给never）
// const errorEnc = (message: string): never => {
//   throw new Error(message)
// }
// // 不可能有返回值，死循环
// const infiniteFunc = ():never => {
//   while(true){}
// }
//
// const neverVariable = (() => {
//   while (true){}
// })
// num = neverVariable()

// 对象是引用类型
// let obj = {
//   name: 'lison'
// }
// let obj2 = obj
// obj2.name = 'L'
// console.log(obj)

// function getObject(obj: Object): void {
//   console.log(obj)
// }
// console.log(getObject({name: 'zs'}), '1')

// 类型断言
// const getLength = (target: string | number): number => {
//   if ((<string>target).length || (target as string).length ===0) {
//     return (<string>target).length
//   } else {
//     return target.toString().length
//   }
// }