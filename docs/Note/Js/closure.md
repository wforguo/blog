## 闭包

::: tip
闭包（所有）自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方p
:::

闭包是作用域应用的特殊情况

tips

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

### 闭包的应用

隐藏数据

节流和防抖


### 不足

内存溢出

为什么？

垃圾回收机制导致
