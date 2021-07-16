# vue项目,ie11 浏览器报 Promise 未定义的错误

> 报错：

 {description: "“Promise”未定义", message: "“Promise”未定义", name: "ReferenceEr...", number: -2146823279, stack: "ReferenceEr..."} 



#### 解决办法

- 1. npm install babel-polyfill --save

- 2. 在main.ts中 import "babel-polyfill"

- 3.如果使用了vuex，则在vuex的index.ts文件中也要  import "babel-polyfill"，最好放在 import Vuex from 'vuex' 的前面
