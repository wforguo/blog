# Vue

> Vue 是一套用于构建用户界面的渐进式MVVM框架。那怎么理解渐进式呢？渐进式含义：强制主张最少。

Vue是一套基于MVVM的渐进式框架，包含了声明式渲染，组件化，路由管理，状态管理等特点，

## 原理

### MVVM的理解

[Mvc、MVVM](https://juejin.im/post/5cd8a7c1f265da037a3d0992)

### 响应式原理

- [Vue响应式原理](./theory.md)

### [Vuex使用及原理]

### [Axios使用及原理]

### [Vue-Router使用及原理]

- hash模式

hash变化的监听

- history模式

HTML5 history

- strict模式

### 数据双向绑定

## 应用

### 指令

### 修饰符

### 传值

### [路由的自动加载](./auto-route.md)

### 组件开发

### 打包优化

- DLL优化

每次都需要去处理第三方库；

1. webpack.dll.js

```javascript
const path = require(path);

const webpack = require(webpack);

module.exports = {
    entry: {
        vendor: ['Vue/dist/Vue.esm.Js']
    },
    output: {
        path: path.join(__dirname, "../static/Js"),
        filename: '[name].dll.Js',
        libary: '[name]_libary'
    },
    plugins: [
    ]
};
```

2. 先打包第三方库

## 实战

(数组渲染所遇到的问题)

(组件传值遇到的问题)

(路由传值问题)

(axios发起option请求的解决办法)

 [vue项目,ie11 浏览器报 Promise 未定义的错误](./js/polyfill.md)

