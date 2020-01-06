# js上下文的概念

- js存在上下文的概念，并且是可以改变的；

## apply和call

call 和 apply 是为了动态改变this而出现的，

当一个 object 没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。


```javascript

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

```javascript
    const func = function(arg1, arg2) {
         
    };

    func.call(this, arg1, arg2);
    func.apply(this, [arg1, arg2])

```

## 总结

- apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
- apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
- apply 、 call 、bind 三者都可以利用后续参数传参；
- bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用。
