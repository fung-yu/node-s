// 观察者模式   有观察者  肯定有被观察者
/**
 * 观察者需要放到被观察者中，被观察者的状态发生变化需要通知观察者，我变化了
 *
 * 内部是基于发布订阅模式   被观察者 收集所有观察者（类似与发布订阅中的on）   被观察者状态发生变化后 要通知观察者 （相当于发布订阅的emit）
 */

/**
 * 举例 我和我媳妇 需要观察小宝宝的心里状态的变化
 *
 */
class Subject {
  // 被观察者   小宝宝
  constructor(name) {
    this.name = name;
    this.state = "开心的";
    this.Observers = [];
  }
  attach(o){// 相当于Subject.prototype.attach， 用于收集观察者
    this.Observers.push(o)
  }
  setState(newState){
      this.state = newState;
      this.Observers.forEach(o=>o.update(this));
  }
}

class Observer {
  // 观察者   我和我媳妇
  constructor(name){
      this.name = name;
  }
  update(baby){
    console.log(`当前${this.name}被通知了， 当前小宝宝的状态是${baby.state}`);
  }
}


let baby = new Subject('小宝宝');
let father = new Observer('爸爸');
let mother = new Observer('妈妈');
baby.attach(father);
baby.attach(mother);
baby.setState('被欺负了');




