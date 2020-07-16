// 父母监控孩子的状态

class Parent {
    constructor(name){
        this.name = name;

    }
    getNotice(e){
        console.log(e);
        console.log(`得到通知，孩子目前的状态是${e}`);
    }
}

class Baby {
    constructor(name){
        this.name = name;
        this.state = 'happy';
    }
    setState(newState){
        this.state = newState;
        Center.emit(this.state);
    }
}

const Center = {
 arr:[],
 on(fn){
    this.arr.push(fn);
 },
 emit(obj){
     console.log('obj', obj);
    this.arr.forEach(fn=>fn.call(this, obj));
 }
}

let baby = new Baby('AAA');
let father = new Parent('dad~');
let mother = new Parent('mun~');
Center.on(father.getNotice.bind(this));
Center.on(mother.getNotice.bind(this));
baby.setState('unhappy');





