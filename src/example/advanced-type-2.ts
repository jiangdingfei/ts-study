// this类型
// class Counters {
//   constructor(public count: number = 0) {
//
//   }
//   public add(value: number) {
//     this.count += value
//     // return this,为了链式调用
//     return this
//   }
//   public subtract(value: number) {
//     this.count -= value
//     return this
//   }
// }
// let counter1 = new Counters(10)
// console.log(counter1.add(3).subtract(2));
//
// class PowCounter extends Counters {
//   constructor(public count: number = 0) {
//     super(count);
//   }
//   public pow(value: number) {
//     this.count = this.count ** value
//     return this
//   }
// }
// let powCounter = new PowCounter(2)
// console.log(powCounter.pow(3).add(1).subtract(3))

// 索引类型
// keyof
interface InfoInterfaceAdvanced {
  name: string;
  age: number;
}
let infoProp: keyof InfoInterfaceAdvanced
infoProp = 'name'
infoProp = 'age'
// infoProp = 'sex'

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(n => obj[n])
}
const infoObj = {
  name: 'lison',
  age: 18,
}
let infoValues: (string | number)[] = getValue(infoObj, ['name', 'age'])
// console.log(infoValues)

// []索引访问操作符
type NameTypes = InfoInterfaceAdvanced['name'] // string类型

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

// 当接口索引类型为string时，实现该接口的对象的属性名可以是number类型或者string类型
// 当接口索引类型为number时，实现该接口的对象的属性名只能是number类型
interface Objs<T> {
  [key: string]: T
}
// let keys: keyof Objs<number>
// const objs1: Objs<number> = {
//   age: 18
// }
let keys: Objs<number>['name']

interface Type {
  a: never;
  b: never;
  c: string;
  d: number;
  e: undefined;
  f: null;
  g: object;
}
// keyof 返回接口属性类型不为never的属性名（undefiend  null 可以返回）
type Test = Type[keyof Type]
// type Aa =keyof Type

// 映射类型
// ts提供通过旧类型创建新类型
interface Info1 {
  age: number;
  name: string;
  sex: string;
}
// in 相当于for...in
type ReadonlyType<T> = {
  readonly [P in keyof T]?: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>
let info11: ReadonlyInfo1 = {
  age: 18,
  name: 'lison',
  // sex: 'man'
}
// info11.age = 20

// ts内置类型
// Readonly Partial Pick Record
// Readonly 转换只读
// Partial 转换可选

// Pick
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

// Pick 用法
interface Info2 {
  name: string;
  age: number;
  address: string;
}

const info5: Info2 = {
  name: 'lison',
  age: 18,
  address: 'beijing'
}
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res: any = {}
  keys.map(key => {
    res[key] = obj[key]
  })
  return res
}
const nameAndAddress = pick(info5, ['name', "address"])
// console.log(nameAndAddress)

// Record 用法(用于将对象中的属性或者值转换成其他类型)
/*
  Record<K, T> ,用于对象，泛型K代表属性名， T代表属性值
 */
function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K,U> {
  const res: any = {}
  for (const key in obj) {
    res[key] = f(obj[key])
  }
  return res
}
const names = {
  0: 'hello',
  1: 'world',
  2: 'bye'
}
const lengths = mapObject(names, s => s.length)
// console.log(lengths,'lengths')

/*
  同态
  内置映射类型中, Readonly(只读), Partial(可选), Pick 属于同态
 */


// 创建映射类型
type Proxy<T> = {
  get(): T;
  set(value: T): void;
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(obj:T): Proxify<T> {
  const result = {} as Proxify<T>
  for (const key in obj) {
    result[key] = {
      get:() => obj[key],
      set:(value) => obj[key] = value,
    }
  }
  return result
}
let props = {
  name: 'lison',
  age: 18,
}
let proxyProps = proxify(props)
// proxyProps.name.set('li')
console.log(proxyProps.age.get())

// 拆包，由映射类型拆分成原始类型
function unproxify<T>(t: Proxify<T>): T {
  const result = {} as T
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result
}
let originalProps = unproxify(proxyProps)
// console.log(originalProps, 'originalProps')

// 增加和移除特定修饰符
const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()

type Objs2 = {
  [stringIndex]: string,
  [numberIndex]: number,
  [symbolIndex]: symbol,
}
type KeysType = keyof Objs2

type ReadonlyTypes<T> = {
  readonly [P in keyof T]: T[P]
}
let objs3: ReadonlyTypes<Objs2> = {
  a: 'aa',
  1: 11,
  [symbolIndex]: Symbol()
}
// objs3.a = 'abc'

// 元组和Promise的映射类型, 3.1

type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type PromiseTuple = MapToPromise<Tuple>

const tuple1: PromiseTuple = [
  new Promise<number>((resolve => resolve(1))),
  new Promise<string>((resolve => resolve('a'))),
  new Promise<boolean>((resolve => resolve(false))),
]

// unknown ,3.0
// // 【1】仍和类型都可以复制给unknown类型
let value1: unknown
// value1 = 'a'
// value1 = 123

// [2] 如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，此时他只能赋值给unknown自身或any类型
let value2: unknown
// let value3: string = value2

// [3] 如果没有类断言或基于控制流的类型细化时，不能在他上面进行任何操作
let value4: unknown
// value4 += 1

// [4] unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type type1 = string & unknown
type type2 = unknown & string[]

// [5] unknown 与仍和其他类型（除了any是any）组成的联合类型，都等于 unknown
type type5 = unknown | string
type type6 = any | unknown
type type7 = number[] | unknown

// [6] never类型是unknown都子类型
type type8 = never extends unknown ? true : false

// [7] keyof unknown 等于类型never
type type9 = keyof unknown

// [8] 只能对unknown进行等或不等操作，不能进行其他操作
// value1 === value2
// value1 !== value2
// value1 += value2

// [9] unknown类型等值不能访问他的属性、作为函数调用和作为类创建实例
let value10: unknown
// value10.age

// [10] 使用映射类型时如果遍历的时unknown类型，则不会映射仍和属性
type Types1<T> = {
  [P in keyof T]: number
}
type Type11 = Types1<any>
type Type12 = Types1<unknown>


// 条件类型
// T extends U ? X : Y
type Types2<T> = T extends string ? string : number
// let index: Types2<1>

// 分布式条件类型
// type TypeName<T> = T extends any ? T : never
// type Type3 = TypeName<string | number>

type TypeName<T> =
    T extends string ? string :
        T extends number ? number :
            T extends boolean ? boolean :
                T extends undefined ? undefined :
                    T extends () => void ? () => void :
                        object

type Type4 = TypeName<() => void>
type Type5 = TypeName<string[]>
type Type6 = TypeName<(() => void) | string[]>

type Diff<T, U> = T extends U ? never : T
type Test2 = Diff<string | number | boolean, undefined | number>

type Type7<T> = {
[K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

interface Part {
  id: number;
  name: string;
  subparts(newName: string): void;
  undatePart(newName: string): void;
}
type Test1 = Type7<Part>

// 条件类型的类型推断

// infer
// 83
type Type8<T> = T extends any[] ? T[number] : T
type Test3 = Type8<string[]>
type Test4 = Type8<string>

type Type9<T> = T extends (infer U)[] ? U : T
type Test5 = Type9<string[]>
type Test6 = Type9<string>

// 从T中选出不在U中的类型
// Exclude<T, U>
type Type10 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

// 从T中选出可以赋值给U的类型
// Extract<T, U>
type Type121 = Extract<'a' | 'b' | 'c', 'a'| 'c'>

// 从T中去掉null和undefined
// NonNullable<T>
type Type13 = NonNullable<string | number | undefined | null>

// 获取函数类型返回值类型
// ReturnType<T>
type Type14 = ReturnType<() => string>
type Type15 = ReadonlyType<() => void>

// 获取构造函数实例的类型
// InstanceType<T>
class AClass {
  constructor() {
  }
}
type T1 = InstanceType<typeof AClass>
type T2 = InstanceType<any>
type T3 = InstanceType<never>
// type T4 = InstanceType<string>
