let fs = require("fs");

function read() {
  return new Promise((resolve, reject) => {
    console.log("0", new Date());
    fs.readFile("./name.txt", "utf8", function (err, data) {
      console.log('2', new Date());
      if (err) return reject(err);
      resolve(data);
    });
  });
}
console.log("1", new Date());
read().then(
  (data) => {
    console.log("--success1---", data);
  },
  (err) => {
    console.log("--fail2---", err);
  }
);

// let promise = new Promise((resolve, reject) => {
//   console.log("1");
//   resolve("2");
// });
// console.log("0");

// promise.then((data) => {
//   console.log(data);
// });
