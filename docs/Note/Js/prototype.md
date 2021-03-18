## 原型和原型链

> 原型和原型链


只有函数才有 `prototype`属性，

只有对象才有 `__proto__`属性，

### 构造函数创建对象

```js

function Person () {
    this.name = 'name'; // 每次都对实例对象自身做了一个扩展
}
let person = new Person(); // 创建一个空对象，{}，并给这个对象的__proto__ 赋值，也就是构造函数的prototype
person.name = 'hello world!';
person.gender = 'man';
console.log(person);

```

### prototype

每个函数都有一个 `prototype`属性，如：

```js

function Person () {
    
};
// prototype是函数才会有的属性
Person.prototype.type = 'person';
Person.prototype.age = 0;
let person = new Person();
console.log(person.age);

```
函数的prototype属性指向了一个对象，这个对象是调用该构造函数而创建实例的原型，也就是该实例`person`中的原型；

```js
person.__proto__ === Person.prototype;
```

当我们创建了一个构造函数的时候，或者声明了一个`class`的时候，这个时候这个变量存在一个`prototype`对象，
当使用该构造函数去创建实例的时候，这个实例的原型就是这个对象。

构造函数和实例原型之间的关系：

![原型](./Person.prototype.png)

### __proto__

每个JavaScript对象都含有一个属性（隐式原型），叫做`__proto__`，该属性指向该对象的原型，

绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 `Person.prototype` 中，
实际上，它是来自于 `Object.prototype` ，与其说是一个属性，不如说是一个 `getter/setter`，
当使用 `obj.__proto__` 时，可以理解成返回了 `Object.getPrototypeOf(obj)`。

```js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true

```

![原型](./__proto__.png)

### constructor

每个原型都有一个 `constructor` 属性指向关联的构造函数

```js
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```

更新关系图如下：

![关系图](./constructor.png)

综上：

```js
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true

```

### 实例与原型

当读取实例的属性时，如果找不到，会从与之关联的原型中的去查找，如果还找不到，会去原型的原型去查找，一直找到 `Object`，如果还没有，就返回 `undefined`

因为到`Object`时，此时的 `Object.prototype.__proto__` 的值为 `null` ，`Object.prototype` 没有原型,那么也就不存在任何属性。

```js
console.log(Object.prototype.__proto__ === null) // true
```

### 原型的原型

![原型的原型](./prototype.__proto__.png)

### 原型链

`Object.prototype` 的原型

```js
Object.prototype.__proto__ === null
```

`null`代表什么？

```
null 表示“没有对象”，即该处不应该有值。
```

所以 ` Object.prototype.__proto__` 的值为 `null` 跟 `Object.prototype` 没有原型，其实表达了一个意思。

所以查找属性的时候查到 Object.prototype 就可以停止查找了。

关系图更新：

![原型链](./prototype.link.png)

由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。
