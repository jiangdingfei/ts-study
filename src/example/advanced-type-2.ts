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
// keyof 返回接口属性类型不为never，undefined，null的属性名（好像有问题--undefiend, null 可以返回）
type Test = Type[keyof Type]
// const worth: Test = undefined

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
// 56.25
