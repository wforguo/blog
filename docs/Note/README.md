# 笔记

> 笔记

## 前端体系

[前端体系](https://cdn.forguo.com/assets/imgs/f2e-map.png)

## MarkDown

[MarkDown语法](./MarkdownLang.md)

## JavaScript

- [闭包]()

- [函数防抖与节流](./js/debounceAndThrottle.md)

- [图片懒加载](./js/lazyLoad.md)

- [JS上下文](./js/content.md)

- [ES6学习](./js/es6.md)

## 小程序

- [wepy编译less添加css前缀（autoprefix）](./wxApp/autoprefix.md)

- [小程序web-view覆盖原生组件](./wxApp/webview.md)

- [小程序骨架屏的使用](./wxApp/wxapp-skeleton.md)

- [wepy开启代码压缩](./wxApp/wepy-minify.md)

## Git

[Git基本操作](Git/Git.md)

## jQuery

### jQuery源码

- [核心架构](jQuery/jQuery.core..md)

- 事件委托

- 插件机制

- 兼容性（各个版本）

- 与Zepto的区别

## Vue

### 源码分析

- [Vue响应式原理](./Vue/theory.md)

- [数据双向绑定原理]

- [Vuex使用及原理]

- [Axios使用及原理]
 
- [Vue-Router使用及原理]

### 相关

[路由的自动加载](./Vue/auto-route.md)

### 实战中遇到的问题以及解决方式

(数组渲染所遇到的问题)

(组件传值遇到的问题)

(路由传值问题)

(axios发起option请求的解决办法)

 [vue项目,ie11 浏览器报 Promise 未定义的错误](./js/polyfill.md)


#### 打包优化

DLL 优化

每次都需要去处理第三方库；

1. webpack.dll.js

```javascript
const path = require(path);

const webpack = require(webpack);

module.exports = {
    entry: {
        vendor: ['Vue/dist/Vue.esm.js']
    },
    output: {
        path: path.join(__dirname, "../static/js"),
        filename: '[name].dll.js',
        libary: '[name]_libary'
    },
    plugins: [
    ]
};
```

2. 先打包第三方库

#### Vue插件开发

执行install方法

```javascript
var a = {
    install: function() {
        vue.mixin({

            // 生命周期的注入（每一个组件） 
            
            // 在这里可以注入全局的data，方法，以及修改生命周期
    
        })
    }
}
```

## 项目工程化

- gulp的使用

- npm基本命令

- webpack基本知识

##  常见的bug以及解决方式

### css

### js

### 兼容性

## 服务端

### 自动化部署

- [Linux常用命令](Serve/linux-bash.md)

- [Jenkins+GitHub](Serve/Jenkins+GitHub.md)

- [Jenkins+GitLab](Serve/Jenkins+GitLab.md)

### Nginx配置

[Nginx配置](./Serve/Nginx.md)

### koa项目发布上线

[koa项目上线](./Serve/koa.md)

## 代码片段

[代码片段](./Codes/codes.md)
