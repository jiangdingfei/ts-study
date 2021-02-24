// function setName() {
//   console.log('get setName');
//   return (target:any) => {
//     console.log('setName')
//   }
// }
//
// function setAge() {
//   console.log('get setAge');
//   return (target:any) => {
//     console.log('setAge')
//   }
// }
// @setName()
// @setAge()
// class ClassDes {}

// 类装饰器
// let sign = null
// function setName(name: string) {
//   return (target: new () => any) => {
//     sign = target;
//     console.log(target.name)
//   }
// }
// @setName('lison')
// class ClassDes {
//   constructor() {
//   }
// }
// console.log(sign === ClassDes)
// console.log(sign === ClassDes.prototype.constructor)

// function addName(constructor: new () => any) {
//   constructor.prototype.name = 'lison'
// }
// @addName
// class ClassD {}
// // 声明合并
// interface ClassD {
//   name: string
// }
//
// const d = new ClassD();
// console.log(d.name)
//
// function classDecorator<T extends new(...args: any[]) => {}>(target: T): T {
//   return class extends target {
//     public newProperty = 'new property'
//     public hello = 'override'
//   }
// }
//
// @classDecorator
// class Greeter {
//   public property = 'property'
//   public hello: string
//   constructor(m:string) {
//     this.hello = m
//   }
// }
// console.log(new Greeter('word'))

// 方法装饰器（20分钟）
// configurable
// writeable
// enumerable

// interface ObjWithAnyKeys {
//   [key: string]: any
// }
// let obj12 = {}
// Object.defineProperty(obj12, 'name', {
//   value: 'lison',
//   writable: false,
//   configurable: true,
//   enumerable: true,
// })

// function writable(bool: boolean) {
//   return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
//     console.log(bool, 'bool')
//     descriptor.writable = bool
//     const func = descriptor.value;
//     if (typeof func === 'function') {
//       descriptor.value = function(...args: any[]) {
//         console.time();
//         console.log(this, 'this')
//         const result = func.apply(this, args);
//         console.timeEnd()
//         return result;
//       }
//     }
//     // 不需要返回属性描述对象
//     // return descriptor
//   }
// }

// function enumerable(bool: boolean): any {
//   return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
//     // 方法装饰器如果有返回值，将作为属性的属性描述符
//     return {
//       value() {
//         return 'not age'
//       },
//       enumerable: bool,
//     }
//   }
// }
// class ClassF {
//   constructor(public age: number) {
//   }
//   @enumerable(false)
//   public getAge() {
//     // console.log(11111)
//     return this.age
//   }
//   // @enumerable(false)
//   // public idType= '1'
// }
// const classF = new ClassF(18)
// // console.log(Object.keys(classF), 'cl')
// console.log(classF.getAge(), 'getAge')
//
// for (const key in classF) {
//   console.log(key);
// }

// function enumerable(bool:boolean) {
//   return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
//     descriptor.enumerable = bool
//   }
// }
//
// class ClassG {
//   private _name: string
//   constructor(name: string) {
//     this._name = name;
//   }
//   @enumerable(true)
//   get name() {
//     return this._name
//   }
//   set name(name) {
//     this._name = name
//   }
// }
// const classG = new ClassG('lison')
// for (const key in classG) {
//   console.log(key)
// }

// // 属性装饰器
// function printPropertyName (target: any, propertyName: string) {
//   console.log(propertyName)
// }
//
// class ClassH {
//   @printPropertyName
//   public name: string = 'zs'
// }
//
// // 参数装饰器
// // 参数装饰器的返回值会被忽略
// function required(target: any, propertyName: string, index: number) {
//   console.log(`修饰的是${propertyName}的第${index + 1}个参数`)
// }
// class ClassI {
//   public name: string = 'lison'
//   public age: number = 18
//   public getInfo(prefix: string, @required infoType: string): any {
//     return prefix + ' ' + this[infoType]
//   }
// }
// interface ClassI {
//   [key: string]: string | number | Function
// }
// const classI = new ClassI()
// classI.getInfo('hihi', 'age')