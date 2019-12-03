### ES6学习


```js
class App {
    init() {
        console.log('init')
    }
    test() {
        console.log('test')
    }
}

let app = new App();
app.init();

let obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver)

    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        console.log(`value ${value}!`);
        return Reflect.set(target, key. value, receiver)
    }
});

obj.count = 1;
//  setting count!
// ++obj.count;


let proxy = new Proxy({},{
    get: function (target, property) {
        return 35;
    }
});


let Fruit = function () {

};

Fruit.prototype = {
    color: 'green',
    say: function () {
        console.log(`my color is ${this.color}`)
    }
};


var apple = new Fruit();
apple.say();

let banana = {
    color: 'yellow'
};

apple.say.call(banana);
apple.say.apply(banana);


```
