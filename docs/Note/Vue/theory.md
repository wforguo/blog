# Vue的数据响应式原理

[js](vue.js)

## 原理

### Object.defineProperty

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
关于`Object.defineProperty`的说法

> Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。


```javascript

/**
 * [target] 要在其上定义属性的对象。
 * [key]要定义或修改的属性的名称。
 * [descriptor]将被定义或修改的属性描述符。
 */

// ES5语法，不支持IE8及以下版本
Object.defineProperty(target, key, {
    writable: false, // 默认 是否可修改
    configurable: false, // 默认 是否可被del
    enumerable: false, // 默认 是否可遍历
    set() {
        // 默认：undefined
    },
    get() {
        // 默认：undefined        
    }
})

```

## Vue的应用


- 基础使用

```javascript
    let obj = {
        name: 'vue'
    };
    // 通过中间变量去get和set
    let value = obj.name;
    Object.defineProperty(obj, 'name', {
        enumerable: true, // 可遍历
        configurable: true, // 可删除
        get() {
            // 此处省略收集依赖
            // 收集对应的变量再哪些地方用到了
            // 响应式系统使用响应式数据的getter方法对观察者进行依赖收集（Collect as Dependency）
            return value;
        },
        set(newValue) {
            value = newValue;
            // 省略了触发依赖，
   
            // 读取视图模板，生产语法树
            // 使用响应式数据的setter方法通知（notify）所有观察者进行更新，此时观察者 Watcher 会触发组件的渲染函数（Trigger re-render），
            // 组件执行的 render 函数，生成一个新的 Virtual DOM Tree，此时 Vue 会对新老 Virtual DOM Tree 进行 Diff，查找出需要操作的真实 DOM 并对其进行更新。
            that.render(newValue);
        }
    });
```

不足：只能监听一个属性，并且要通过中间变量

- 遍历对象的属性

```javascript
    // observe观察数据
    Vue.prototype.observe = function (data) {
        if (!data || typeof data !== 'object') {
            return false;
        }

        // 遍历data，将原来所有属性改成set和get的形式
        // 先获取到数据的key和value
        Object.keys(data).forEach((key) => {
            if (typeof data[key] === 'object') {
                // 如果是对象，则继续去遍历他的属性
                // data[key]充当一个中间变量
                this.observe(data[key]);
            } else {
                this.defineReactive(data, key, data[key]);
            }
        });
    };

    // 添加数据监听
    // 由于Object.defineProperty只能作用于Object，
    // 所以数组的监听，使用了伪装者模式
    Vue.prototype.defineReactive = function (target, key, value) {
        let that = this;
        // ES5语法，不支持IE8及以下版本
        Object.defineProperty(target, key, {
            enumerable: true, // 可遍历
            configurable: true, // 可删除
            get() {
                // 此处省略收集依赖
                // 收集对应的变量再哪些地方用到了
                console.log('get', value);
                return value;
            },
            set(newValue) {
                console.log('set', newValue);
                value = newValue;
                // 数据改变，触发dom渲染
                // 触发收集依赖后的更新
                that.render(newValue);
            }
        });
    };

```

- 数组的监听实现

使用装饰者模式

```javascript

// 拿出数组原型链并拷贝

var arrayPro = Array.prototype;
var arrayOb = Object.create(arrayPro);

// 去重写以下的方法
var arrFun = ['push', 'pull', 'shift'];

    arrFun.forEach((methods, index) => {  
        arrayOb[methods] = function() {
            // 执行对应的数组操作，并执行视图的更新
            var ret = arrayPro[method].apply(this, arguments);
            // 触发视图更新
            dep.notify();
            return ret;
        }
    });

```

## Vue3的原理

> Proxy

- 基础使用

```javascript

let obj = {
    name: 'vue'
}

// 相对于vue2省去了一个for in循环
// 不用去污染源对象
// 写法更优雅了

obj = new Proxy(obj, {
    get: function(target, key, receiver) {
        // receiver：代理对象
        console.log(arguments);
        return target[key];     
    },
    set: function(target, key, value, receiver) {
        console.log(arguments);
        // 触发视图更新
        dep.notify();
        return Reflect.set(target, key, value);
    }
})
obj.name = 'proxy';
console.log(obj.name);
```

- Proxy的应用

1. 类型校验

2. 私有变量

3. ...


