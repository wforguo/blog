# ES6学习

> ES6

## 1. const、let

## 2. 字符串扩展

### 2.1 模版字符串

是增强版的字符串，用反引号（`）标识

变量名写在${}之中。

如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。

可以使用trim方法消除它。

还能调用函数
；
```javascript
 basket = {};
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.index}</em>
  are on sale!
`).trim();
// trim() 消除空格和缩进
```

### 2.2 模版编译

## 3. 数组的扩展

### 3.1 扩展运算符

扩展运算符（`spread`）是三个点（`...`）

该运算符将一个数组，变为参数序列

### 3.2 扩展运算符应用

- a. 复制数组

数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。

```javascript
// ES5的方法，
const a1 = [1, 2];
const a2 = a1;

```

上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。

以下两种修改a2不会对a1产生影响

```javascript
// ES5的方法，
const a1 = [1, 2];
const a2 = a1.concat();
```

```javascript
// ES6的方法，
const a1 = [1, 2];
const a2 = [...a1];
```

- b. 合并数组

以下为浅拷贝（它们的成员都是对原数组成员的引用，这就是浅拷贝）

```javascript
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

- c. 字符串

将字符串转为真正的数组。

```javascript
[...'hello']
```

d. 数组的遍历

```javascript

 var arr3 = arr1.map((item, index) => {
     // index:每一项值，index:下标
 });
 // 只有一个参数()可省略

 var arr4 = arr1.map(item => item + 1);
 // 返回遍历后的结果
```
e. 数组实例的 entries()，keys() 和 values()

ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

```javascript

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

## 4.Promise对象

（其实就是将回调函数改成了链式调用）

ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。

Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

```javascript
const getNow = () => {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            let now = new Date();
            let time =  now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            return resolve(time);
            // return 后面的语句不执行
        }, 3000)
    })
};
getNow().then(res => {
    console.log('now:' + res)
},error => {
    console.log('error:' + error)
})
```

then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

*reject方法的作用，等同于抛出错误*

Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

*then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。*

Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

类似于 `this.$http.all()`

## 5. Generator函数

```javascript

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hd = helloWorldGenerator();

hd.next(); // { value: 'hello', done: false }
hd.next(); // { value: 'world', done: false }
hd.next(); // { value: 'ending', done: true }
hd.next(); // { value: undefined, done: true }

// value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。
// 调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。

```
Generator函数(翻译:生成器)

yield: 产出，yield暂停执行的标记，next 用于恢复执行

分段执行

#### Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。这时就变成了一个单纯的暂缓执行函数

#### 如何使用 Generator 函数（一个异步任务的封装）

```javascript

let getNow = function () {
    let now = new Date();
    return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
};

function* get() {
    var result = yield getNow();
    console.log(result);
}
let g = get();
g.next();

```


## tips:

图片响应式

```html
<img srcset="photo_w350.jpg 1x, photo_w640.jpg 2x" src="photo_w350.jpg" alt="">
```
如果屏幕的dpi = 1的话则加载1倍图，而dpi = 2则加载2倍图

## class使用

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
```

## Proxy

```javascript

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

```
