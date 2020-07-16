// 发布订阅模式  主要分成两个部分 on emit
// on 订阅 就是把一些函数维护到一个数组中
// emit 发布 就是让数组中的方法依次执行

let fs = require("fs"); // file system
let school = {};
// 类似 房屋租赁  业主把房子放到中介  租户去中介租房子

let event = {
  // 订阅和发布没有明显的关联（依赖关系），靠中介数组arr来实现
  arr: [],
  on(fn) {
    this.arr.push(fn);
  },
  emit() {
    this.arr.forEach((fn) => fn());
  },
};

event.on(function () {
  console.log("读取了一个");
});

event.on(function () {
    if(Object.keys(school).length===2){
        console.log(school);
    }
});

fs.readFile("./name.txt", "utf8", function (err, data) {
  school.name = data;
  event.emit();
});

fs.readFile("./age.txt", "utf8", function (err, data) {
  school.age = data;
  event.emit();
});
