# 笔记

> 笔记

## 前端体系

[前端体系](https://cdn.forguo.com/assets/imgs/f2e-map.png)

## interview

- 1、本科及以上学历，2年以上工作经验，参与过大型互联网产品的设计研发工作；
- 2、精通JavaScript，CSS，HTML，DOM、协议、安全、性能等前端技术；
- 3、熟悉W3C，ECMAScript，CommonJS，ES6等相关技术标准 ；
- 4、了解AngularJS，React，Vue等新式前端框架和相关技术栈；
- 5、了解MVC，MVVM，flux，redux，前端构建等相关工程知识；
- 6、熟练掌握Web以及Mobile Web开发相关技术；
- 7、能独立完成复杂前端系统或大型框架；
- 8、至少了解Node、Python、PHP、Java等一门后端开发语言；
- 9、良好的设计和编码风格，关注国内外各大开源社区和技术论坛；
- 10、优秀的团队合作能力，沟通顺畅，追求卓越，乐于创新，敢于尝试。

[Mvc、MVVM](https://juejin.im/post/5cd8a7c1f265da037a3d0992)

数据双向绑定

Vue数据异步更新的原理；

防抖和节流

高阶函数

修饰符

异步过程

cookie

setTimeout、setInterval与requestAnimationFrame

给出代码，说出运算结果（this、event loop）

写代码：回文数，数组去重，自定义log，判断数据类型

有哪些缓存策略(LRU）

https://www.nowcoder.com/discuss/171705

## MarkDown

[MarkDown语法](./MarkdownLang.md)

## JavaScript

- [闭包]()

- [函数防抖与节流](./js/debounceAndThrottle.md)

- [图片懒加载](./js/lazyLoad.md)

- [JS上下文](./js/content.md)

- [ES6学习](./js/es6.md)

- [深拷贝的实现](./js/deep-copy.md)

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
