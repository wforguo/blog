# Vue路由的自动加载的实现

## 一般写法

```javascript

import Vue from 'vue';
import Router from 'vue-router';

const Home = resolve => {
    require.ensure(['@/views/Home'], () => {
        resolve(require('@/views/Home'))
    }, 'Home')
}
const About = resolve => {
    require.ensure(['@/views/About'], () => {
        resolve(require('@/views/About'))
    }, 'About')
}

let routes = [
    {
    path: '/',
    name: 'Home',
    component: Home,
}, {
    path: '/About',
    name: 'About',
    component: About,
}
];

Vue.use(Router);

export default new Router({
    routes
});
```

当我们的项目变得庞大，页面变多的时候，维护页面的路由也将会变得繁琐，

那就可以考虑去实现路由的自动加载

## 路由自动加载

- 思路

我们可以将用到的页面都引入，然后通过文件名去筛选拿到路由名称

可以通过webpack的api来获取对应的文件，即上下文来实现。

> require.context();

可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。

```javascript
require.context(directory, useSubdirectories = false, regExp = /^\.\//);
// require.context(
//   directory: String, 要搜索的文件夹目录
//   includeSubdirs: Boolean /* optional, default true */, 搜索它的子目录
//   filter: RegExp /* optional, default /^\.\/.*$/, any file */, 匹配文件的正则表达式
//   mode: String  /* optional, 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once', default 'sync' */
// )
```

[官方](https://webpack.docschina.org/guides/dependency-management/#require-context)

- 实现


```javascript

import Vue from 'vue';
import Router from 'vue-router';

// 先定义一个空的路由数组
let routes = [
];

let views = require.context('../views/', true, /\.vue$/);

// 导出的方法有 3 个属性： resolve, keys, id。
// - resolve 是一个函数，它返回请求被解析后得到的模块 id。
// - keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
// - id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到


// 这里只用到 keys，返回搜索到的数组
views.keys().forEach((key) => {
    let routerName = views(key).default.name;
    // 将对应路由push到路由的数组
    routes.push({
        path: routerName === 'Home' ? '/' : `/${routerName}`,
        title: routerName,
        name: routerName,
        component: views(key).default
    });
});

// console.log(routes);

Vue.use(Router);

export default new Router({
    routes
});
```

## 扩展

同理，我们也可以通过该api实现组件的自动加载

- 在组件文件夹下新建`index.js`，编码如下

```javascript
const files = require.context('./', false, /\.vue$/); //引入当前路径下所有的vue组件

let components = {};

files.keys().forEach((key) => {
    components[files(key).default.name] = files(key).default;
});

console.log(components);

export default components;

```

- 在需要用到组件的地方

```javascript

import subComponents from '/components';

component: {
   subComponent
}
```

