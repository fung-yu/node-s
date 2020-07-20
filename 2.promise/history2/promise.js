console.log('fung~~');
const RESOLVED = "RESOLVED"; // 成功
const REJECTED = "REJECTED"; // 失败
const PENDING = "PENDING"; // 等待态

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];//专门用来存放成功的回调
    this.onRejectedCallbacks = [];//专门用来存放失败的回调
    let resolve = (value) => {
        if(this.status === PENDING){
            this.value = value;
            this.status = RESOLVED;
            this.onResolvedCallbacks.forEach(fn=>fn());
        }
    };
    let reject = (reason) => {
        if(this.status === PENDING){
            this.reason = reason;
            this.status = REJECTED;
            this.onRejectedCallbacks.forEach(fn=>fn());
        }
    }
    try{
        executor(resolve, reject); //立即执行
    }catch(e){//错误处理直接走错误逻辑
        reject(e)
    }
    
  }
  then(onFulfilled, onRejected){
    if(this.status === RESOLVED){
        onFulfilled(this.value)
    }
    if(this.status === REJECTED){
        onRejected(this.reason)
    }
    if(this.status === PENDING){
        this.onResolvedCallbacks.push(()=>{
            // todo...
            onFulfilled(this.value)
        });
        this.onRejectedCallbacks.push(()=>{
            // todo...
            onRejected(this.value)
        });
    }
  }
}

module.exports = Promise
