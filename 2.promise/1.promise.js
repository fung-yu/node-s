let fs = require("fs");

// error first 错误第一 异步方法无法通过try、catch捕获异常
// fs.readFile('./name.txt', 'utf8', (err, data)=>{
//     fs.readFile(data, 'utf8', (err, data)=>{
//         console.log(data);
//     })
// });

// 使用promise 解决上面的嵌套问题
function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

/**
 * 1.promise 成功和失败的回调的返回值  可以传递到外层的下一个then
 * 2. 返回值处理
 *   1）如果返回的是普通值的话（传递到下一次的成功中， 不是错误 不是promise就是普通值），
 *   2）如果throw出错的情况（一定会走到下一次的失败，这里的出错是指，抛出错误，比如new Erro ）
 *   3）如果返回promise的情况（会采用promise的状态，决定走下一个then的成功还是失败）
 * 3. 错误处理  如果离自己最近的then 没有错误处理（就是没有写错误函数），会向下找
 * 4. 每次执行完Promise.then方法后，返回的都是一个‘新的promise’（promise一旦成功或者失败就不能修改状态）
 */

read("./name1.txt").then(
    (data) => {
      return read('./age1.txt');
    }).then(
    (data) => {
      console.log("---success--", data);
    },
    (err) => {
      console.log("---fail--", err, "错误了！");
    }
  );
