# this

**JS存在上下文的概念，并且是可以改变的**

::: tip
this的取值，是在函数执行的时候确定的
:::

## 场景

### 1、作为普通函数

```javascript
const f1 = function() {
    console.log(this);
};

f1(); // window
```

### 2、apply和call

call 和 apply 是为了动态改变this而出现的，

当一个 object 没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。


```javascript

let Fruit = function () {
    console.log(this);
};

Fruit(); // window

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

apple.say.call(banana); // yellow
apple.say.apply(banana); // yellow

```

```javascript
    const func = function(arg1, arg2) {
         
    };

    func.call(this, arg1, arg2);
    func.apply(this, [arg1, arg2])

```

#### 总结

- apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
- apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
- apply 、 call 、bind 三者都可以利用后续参数传参；
- bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用。

### 3、作为对象方法被调用

### 4、class方法中调用

### 5、箭头函数

::: tip
箭头函数，this的取值，是在函数定义的时候确定的，是在定义时所在的对象，也就是上级作用域中的this取值
:::

- 手写bind函数

```javascript
// 手写一个bind函数
Function.prototype.bind1 = function () {
    // 将参数拆除为数组
    const argus = Array.prototype.slice.call(arguments);

    // 得到要绑定的this，删除参数数组第一项，并返回
    const t = argus.shift();

    const self = this;

    return function () {
        return self.apply(t , argus);
    }
};

const bind2 = function () {
    console.log(this);
};

const bind3 = bind2.bind1({ a: 1 });
bind3();
```
