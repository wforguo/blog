## 深浅拷贝原理

### js数据类型

基本类型：（存在于栈当中）

Null，Undefined，Number，String，Boolean，Symbol

引用类型：（存在于堆当中）

Object, 数组、函数、正则等，都属于js的对象。

JavaScript不允许直接访问内存当中的位置，也就是不允许直接操作对象的内存空间。

### 变量的赋值（Copy）

如果是基本类型的赋值，前后互相不影响，

如果是引用类型的赋值，拷贝的其实是内存地址的引用，所以当改变其中某一个的时候，领一个也会发生改变。

### 浅拷贝（Shallow Copy）

#### 什么是浅拷贝

对象属性的拷贝，如果是基本类型，拷贝的是基本类型的值，
如果是引用类型，拷贝的是内存地址的引用，
所以使用浅拷贝的话，改变其中一个，另外一个也会跟着改变。

#### 场景

- Object.assign()

**其实是一个浅拷贝，并非一个深拷贝**

拷贝的是对象中所有可枚举属性的值，从源对象复制到目标对象，并返回目标对象。

- 展开语法 Spread

```javascript
let a = {
    name: '',
    info: {
        gender: 'man',
    }
}

let b = {...a};
```

其实是和`Object.assign()`同样的效果。

- Array.prototype.slice和Array.prototype.concat

如果数组的项是一个基本类型的值，相互是不影响的，
如果是引用类型的值，一个改变都会发生改变。
说明`slice`，`concat`方法是一个浅拷贝的方法。（Deep Copy）

### 深拷贝

#### 什么是深拷贝

深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。
深拷贝实现速度慢，花销较大，拷贝前后两个对象互不影响。

#### 场景

- JSON.parse(JSON.stringify(object))

不管是数组还是对象，使用序列化之后，改变前后互不影响

但是该方法有以下几个问题。

1、会忽略 undefined

忽略掉

2、会忽略 symbol

忽略掉

3、不能序列化函数

忽略掉

4、不能解决循环引用的对象（类似套娃一样）

报错，

```javascript
// 
let obj = {
    a: 1,
    b: {
        c: 2,
   		d: 3
    }
}
obj.a = obj.b;
obj.b.c = obj.a;

let b = JSON.parse(JSON.stringify(obj));
// Uncaught TypeError: Converting circular structure to JSON
```

5、不能正确处理new Date()

```javascript
// 木易杨
new Date();
// Mon Dec 24 2018 10:59:14 GMT+0800 (China Standard Time)

JSON.stringify(new Date());
// ""2018-12-24T02:59:25.776Z""

JSON.parse(JSON.stringify(new Date()));
// "2018-12-24T02:59:41.523Z"

```

解决方法转成字符串或者时间戳就好了。

```javascript
// 木易杨
let date = (new Date()).valueOf();
// 1545620645915

JSON.stringify(date);
// "1545620673267"

JSON.parse(JSON.stringify(date));
// 1545620658688
```

6、不能处理正则

结果为{},

```javascript
// toDO
// PS：为什么会存在这些问题可以学习一下 JSON。
```

7、会抛弃对象的constructor,所有的构造函数会指向Object

```javascript
let Stu = function(name) {
this.name = name
}

let stu = new Stu('fff')

stu.constructor
// ƒ (name) {
//     this.name = name
// }

stu.constructor === Stu // true

let stuC = JSON.parse(JSON.stringify(stu))

stuC.constructor
// ƒ Object() { [native code] }

stu.constructor === Object // true

```

- jQuery.extend() 和 lodash.cloneDeep()实现深拷贝。

#### 实现一个深拷贝

> 深拷贝

[js](./deep-copy.js)

```javascript

/**
 * @Description 实现一个引用类型的深拷贝
 * @Author forguo
 * @Date 2020/1/14
 */

// let array = [
//     {number: 1},
//     {number: 2},
//     {number: 3}
// ];

let array = {
    number: 1,
    name: 'www',
    info: {
        name: 'forguo',
        age: 26
    }
};

function deepCopy(obj) {
    // 舒适化返回结果，判断是否是数组
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object' || obj == null) {
        // obj是null，或者不是数组或者对象，直接返回即可
        return obj;
    }
    for (let key in obj) {
        // 遍历每个属性，递归拷贝
        if (obj.hasOwnProperty(key)) {
            // 保证key不是原型的属性
            newobj[key] = deepCopy(obj[key]);
        }
        // newobj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
    return newobj
}

Object.keys(array).map((item) => {
    console.log(item);
});
let copyArray = deepCopy(array);
copyArray.number = 100;
console.log(array); // [{number: 1}, { number: 2 }, { number: 3 }]
console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]

```
