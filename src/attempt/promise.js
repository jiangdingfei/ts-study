// 封装promiseAll
// class MyPromise {
//   static async all(list) {
//     try {
//       const resList = []
//       for (const item of list) {
//         resList.push(await item)
//       }
//       return Promise.resolve(resList);
//     } catch (error) {
//       return Promise.reject(error)
//     }
//   }
// }
// MyPromise.all([
//   Promise.resolve(5),
//   Promise.resolve(20),
//   Promise.reject(50)
// ]).then(res => {
//   console.log(res)
// }).catch(error => {
//   console.log(error, 'error')
// })

// 封装自己的Promise
function test(data) {

  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
// class Mypromise {
//   constructor(callback) {
//     callback(Mypromise.resolve, Mypromise.reject)
//   }
//
//   static resolve = res =>{
//     this.res(res)
//   }
//   static reject(error) {
//
//   }
//   then(res) {
//     this.res = res;
//   }
//   catch(error) {
//     this.error = error;
//   }
// }

