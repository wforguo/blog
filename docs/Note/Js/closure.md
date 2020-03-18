# 作用域和闭包

## 作用域和自由变量

### 作用域

- 全局作用域
- 函数作用域
- 块级作用域（ES6）

```javascript

```
### 自由变量

未定义的变量一层一层向上找的过程；
直到全局作用域，找不到就是`undefined`

## 闭包

**闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方**
---
### 作用域应用的特殊情况
### 函数作为返回值

```javascript
// 函数作为返回值
function create() {
    let a = 100;
    return function () {
        console.log(a);
    }
}

const fn = create();
const a = 0;
fn(); // 100
```

### 函数作为参数被传递

```javascript
// 函数作为参数传递
function print(fn1) {
    let b = 400;
    fn1();
}

let b = 500;
const fn1 = function () {
    console.log(b);
};
print(fn1); // 500
```

## this

**this的取值，是在函数取值的时候定义的**

---

### 作为普通函数

```javascript
const f1 = function() {
    console.log(this);
};

f1(); // window
```

### 使用call、apply、bind

```javascript
const f1 = function() {
    console.log(this);
};

f1(); // window

let obj = { a: 100 };
// 直接改变指向 
f1.call(obj);  // { a: 100 }

// 返回新函数调用
let f2 = f1.bind(obj);
f2(); // { a: 100 }

```
 
### 作为对象方法被调用

### class方法中调用

### 箭头函数

**箭头函数中，this是在定义时所在的对象，也就是上级作用域中的this取值**

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

## 闭包的应用
