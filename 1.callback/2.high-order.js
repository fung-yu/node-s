// 函数柯里化  函数反柯里化

// 判断变量的类型
/**
 * 常用的判断类型的方法有四种：
 * 1.typeof 缺点：不能判断对象类型
 *   typeof []==="object"
 *   typeof {} === "object"
 * 2.constructor 可以找到这个变量是通过谁构造出来的
 *   [].constructor === Array
 *   ({}).constructor === Object
 * 3.instanceof 判断谁是谁的实例 __proto__
 * 4.Object.prototype.toString.call() 缺陷：不能细分谁是谁的实例
 *   Object.prototype.toString.call()  "[object Undefined]"
 *   Object.prototype.toString.call('')  "[object String]"
 *   Object.prototype.toString.call(1)   "[object Number]"
 */

//  function isType(value, type){
//     return Object.prototype.toString.call(value) === `[object ${type}]`
//  }
// 能不能将方法进行细分 isType=>isString isArray
//  console.log(isType([], 'Array'));

// function isType(type){
//     return function(value){
//         return Object.prototype.toString.call(value) === `[object ${type}]`
//     }
// }
// let isArray = isType('Array')
// console.log(isArray('hello'));
// console.log(isArray([]));

// 通过一个柯里化函数  实现通用的柯里化方法

const currying = (fn, arr = []) => {
  let len = fn.length;
  return function (...args) {
    let concatValue = [...arr, ...args];
    if (concatValue.length < len) {
      return currying(fn, concatValue); // 递归不停的产生函数
    } else {
      return fn(...concatValue);
    }
  };
};

function isType(type, value) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}
let isArray = currying(isType)("Array");
let isString = currying(isType)("String");

console.log(isArray([]));
console.log(isString("123"));

function sum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

const r = currying(sum)(1, 2)(3, 4)(5)(6);
console.log(r);
