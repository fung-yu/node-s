// promise 的特点以及概念
// https://www.ituring.com.cn/article/66566  promises a+ 规范  都通过这个规范来实现

// promise es6 内部已经实现了。 IE下不持支promise，需要polyfill es6-promise  可以在MDN 和 I CAN USE 查询版本兼容

// promise 为什么会产生？ 它可以解决异步问题
/**
 * 1. 多个异步请求并发 （希望同步最终的结果） promise.all
 * 2. 链式异步请求的问题   上一个人的输出是下一个人的输入 promise的链式调用可以解决这个问题
 * 3. 缺陷问题是：还是基于回调的
 * 
 */

 /**
  * 1. promise 有三个状态： 成功态（resolve） 失败态(reject) 等待态(pending)（不成功&&不失败） promise 就是一个类 默认是pending
  * 2. 用户自己决定成功的原因和失败的原因   成功和失败也是用户定义的
  * 3. promise默认执行器是立即执行
  * 4. promise的实例都拥有一个then方法，一个参数是成功的回调，一个是失败的回调
  * 5. 如果执行函数时，发生了异常也会执行失败逻辑
  * 6. 如果promise一旦成功就不能失败， 一旦失败就不能成功(只有等待态的时候才可以改变状态)
  */

let Promise = require('./promise');
 
let promise = new Promise((resolve, reject)=>{
    // resolve('成功')
    // throw new Error('失败');
    reject(1);
    resolve('成功')
});
// 思考如何在外面拿到成功
promise.then((data)=>{
    console.log('success', data);
},(err)=>{
    console.log('faild', err);
})



