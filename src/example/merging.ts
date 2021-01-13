// 声明合并
interface InfoInter {
  name: string
  getRes(input: string): number
}

interface InfoInter {
  age: number
  getRes(input: number): string
}

let infoInter: InfoInter
infoInter = {
  name: 'lison',
  age: 18,
  getRes(text: any): any {
    if (typeof text === 'string') {
      return text.length
    } else {
      return String(text)
    }
  }
}
// console.log(infoInter.getRes(123).length)
// 同名的命名空间合并
// namespace Validations {
//   export const checkNumber = () => {}
// }
// namespace Validations {
//   export const checkLetter = () => {}
// }
// 等价于
// namespace Validations {
//   export const checkNumber = () => {}
//   export const checkLetter = () => {}
// }

// 命名空间和类的合并
// 类需要写在命名空间
class Validations {
  constructor() {
  }
  public checkType() {}
}
namespace Validations {
  export const numberReg = /^[0-9]+$/
}
// console.dir(Validations)

// 函数和命名空间的合并
// 函数定义在前面
// function countUp() {
//   countUp.count++
// }
// namespace countUp {
//   export let count = 0
// }
// console.log(countUp.count)
// countUp()
// console.log(countUp.count)

// 枚举和命名空间的合并
// 无先后顺序
enum Colors {
  red,
  green,
  blue,
}
namespace Colors {
  export const yellow = 3
}
console.log(Colors)