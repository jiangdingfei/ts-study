// 接口
interface NameInfo {
    firstName: string
    lastName: string
}
const getFullName = ({ firstName, lastName}: NameInfo): string => {
    return `${firstName} ${lastName}`
}

console.log(getFullName({
    firstName: 'haha',
    lastName: 'li'
}))

// interface Vegetable {
//     color?: string
//     readonly type: string
//     // [key: string]: any
// }
// const getVegetables = ({ color, type }: Vegetable): string => {
//     return `A ${color ? (color + ''): ''}${type}`
// }

// // 使用类型兼容性(绕过多余属性检测)
// const vegetableInfo = {
//     type: 'tomato',
//     color: 'red',
//     size: 2
// }
// console.log(getVegetables(vegetableInfo))
// let vegetableOjb: Vegetable = {
//     type: 'tomato'
// }
// vegetableOjb.type = 'carrot'

// 接口定义数组
interface ArrInter {
    0: number
    readonly 1: string
}
let arr: ArrInter = [1, 'a']
// arr[1] = 'b'

// 定义函数
type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (n1, n2) => n1 + n2

// interface RoleDic {
//     [id: number]: string
// }
// const role1: RoleDic = {
//     0: 'super_admin',
// }

interface RoleDic {
    [id:string]: string
}
const role2: RoleDic = {
    a: 'super_admin',
    1: 'admin'
}

// 接口继承
interface Vegetables {
    color: string
}
// 继承
interface  Tomato extends Vegetables {
    // color: stirng
    radius: number
}
interface Carrot {
    color: string
    length: number
}
const tomato: Tomato = {
    radius: 1,
    color: 'red'
}

// 混合类型
interface Counter {
    ():void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => { c.count++ }
    c.count = 0
    return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)