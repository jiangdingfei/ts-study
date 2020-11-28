// 交叉类型 (用&符号连接)
//
// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   let res = {} as T & U
//   res = Object.assign(arg1, arg2)
//   return res
// }
// mergeFunc({a: 'a'}, {b: 'b'})

// 联合类型
// type1 | type2 | type3
// const getLengthFunc = (content: string | number): number => {
//   if (typeof content === 'string') { return content.length}
//   else { return content.toString().length}
// }
// console.log(getLengthFunc(false))


// const valueList = [123, 'abc']
// const getRandomValue = () => {
//   const num: number = Math.random() * 10
//   if (num < 5) {
//     return valueList[0]
//   } else {
//     return valueList[1]
//   }
// }
// const item = getRandomValue()
// 一、类型断言

// 二、类型保护 (使用 is)
// 1. 定义类型保护函数 （用 is 关键字）
// function isString(value: number | string): value is string {
//   return typeof value === 'string'
// }
// if(isString(item)) {
//   console.log(item.length)
// } else {
//   console.log(item.toFixed())
// }
// // 2. typeof 进行类型保护
// // string/number/boolean/symbol中的一种
// if(typeof item === 'string') {
//   console.log(item.length)
// } else {
//   console.log(item.toFixed())
// }

// 3. instanceof关键字 类型保护
// class CreatedByClass1 {
//   public age = 18
//   constructor() {
//   }
// }
// class CreatedByClass2 {
//   public name = 'lison'
//   constructor() {
//   }
// }
// function getRandomItem() {
//   return Math.random() < 0.5 ? new CreatedByClass1(): new CreatedByClass2()
// }
// const item1 = getRandomItem()
// if (item1 instanceof CreatedByClass1) {
//   console.log(item1.age)
// } else {
//   console.log(item1.name)
// }

// null/undefined
// let values = '123'
// values = null
//
// const sumFunc = (x: number, y?: number) => {
//   return x + (y || 0)
// }

// 类型保护，类型断言
// const getLengthFunction = (value: string | null): number => {
//   return (value || '').length
// }

// 类型断言
// function getSplicedStr(num: number | null): string {
//   function getRes(prefix: string) {
//     // ! 类型断言
//     return prefix + num!.toFixed().toString()
//   }
//   num = num || 0.1
//   return getRes('lison-')
// }
// console.log(getSplicedStr(1.2))

// 类型别名
// type TypeString = string
// let str: TypeString

// type PositionType<T> = { x: T, y: T}
//
// const position1: PositionType<number> = {
//   x:1,
//   y: -1
// }
// const position2: PositionType<string> = {
//   x: 'left',
//   y: 'top'
// }
//
// type Childs<T> = {
//   current: T,
//   child?: Childs<T>
// }
// let ccc: Childs<string> = {
//   current: 'first',
//   child: {
//     current: 'second',
//     child: {
//       current: 'third'
//     }
//   }
// }
// 只能在对象的属性中引用自己 ？？？ 可能有问题
// type Childss = Childss[] // error ??? 没报错


// 给接口起别名时，不能使用extends 和 implements

// 接口和类型别名兼容
// type Aias = {
//   num: number
// }
// interface Interface {
//   num: number
// }

// 字面量类型
// 1. 字符串字面量
// type Name = 'Lison'
// // const name3: Name = 'hh'
//
// type Direction = 'north' | 'east' | 'south' | 'west'
// function getDirectionFirstLetter(direction: Direction) {
//   return direction.substr(0,1)
// }
// console.log(getDirectionFirstLetter('north'))

// 2. 数字字面量
// type Age = 18
// interface InfoInterfaces {
//   name: string
//   age: Age
// }
// const _info: InfoInterfaces = {
//   name: 'lison',
//   age: 18
// }

// 枚举成员类型


// 可辨识联合（标签联合）
/*
  1. 具有普通的单列类型属性
  2. 一个类型别名包含了一些类型的联合
 */

// kind为单列类型属性
// interface Square {
//   kind: 'square'
//   size: number
// }
// interface Rectangle {
//   kind: 'rectangle'
//   height: number
//   width: number
// }
// interface Circle {
//   kind: 'circle'
//   radius: number
// }
// type Shape = Square | Rectangle | Circle
// function assertNever(value: never): never {
//   throw new Error('Unexpected object: ' + value)
// }
// function getArea(s: Shape): number {
//   // 可辨识特征
//   switch (s.kind) {
//     case 'square':
//       return s.size * s.size;
//     case 'rectangle':
//       return s.height * s.width;
//     case 'circle':
//       // ** 幂运算（es7）
//       return Math.PI * s.radius ** 2;
//     default:
//       return assertNever(s)
//   }
// }

// 完整性检查
// 方法1. 定义一个assertNever函数
// 方法2. 开启strictNullChecks