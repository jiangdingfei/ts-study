// const test = 1

// enum Status {
//   Uploading,
//   Success,
//   Failed
// }
//
// console.log(Status.Uploading)
// console.log(Status.Failed)
// console.log(Status[1])
//
// // 字符串枚举
//
// enum Message {
//   Error = 'Sorry, error',
//   Success = 'Hoho, success',
//   Faild = Error
// }
//
// console.log(Message.Faild)

// 异构枚举

// enum Result {
//   Faild = 0,
//   Success='success'
// }

// 枚举成员类型和联合类型

// 1. enum E { A }
// 2. enum E { A = 'a'}
// 3. enum E { A = -1 }

enum Animals {
  Dog = 1,
  Cat = 2,
}

interface Dog {
  type: Animals.Dog
}

const dog:Dog = {
  type: Animals.Dog
}

// 联合枚举类型
enum Status {
  Off,
  On
}

interface Light {
  status: Status
}

const light: Light = {
  status: Status.Off
}
// ------

// 不会生成js对象
// const enum Status {
//   Success,
//   Error
// }

