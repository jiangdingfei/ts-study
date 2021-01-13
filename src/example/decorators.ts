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

function classDecorator<T extends new(...args: any[]) => {}>(target: T): T {
  return class extends target {
    public newProperty = 'new property'
    public hello = 'override'
  }
}

@classDecorator
class Greeter {
  public property = 'property'
  public hello: string
  constructor(m:string) {
    this.hello = m
  }
}
console.log(new Greeter('word'))

// 方法装饰器（20分钟）
