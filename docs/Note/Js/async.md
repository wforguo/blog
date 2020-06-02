## 单线程和异步

**为了但线程而异步**

### 同步和异步的区别

- `JS`是单线程语言，只能同时做一件事
- 浏览器和`Node.js`已经支持JS启动进程，如:`Web Worker`
- `JS`和`DOM`渲染共用同一个线程，因为JS可修改DOM结构
（`JS`和`DOM`只能同时有一个进行）
- 遇到等待（网络请求，定时任务），不能卡主
- 需要异步
- 回调`callback`函数形式
- 异步不会阻塞代码执行，
- 同步会阻塞代码执行

### 应用场景

- 网络请求
- 定时任务，如：`setTimeout`

### callback hell

**回调地狱**

### Promise

ES6中异步编程规范，是一个对象，解决了回调地狱的问题。

- 语法

```javascript
// 加载一张图片
function loadImg(src) {
    return new Promise((resolve, reject) => {
        let newImage = new Image();
        newImage.onload = function() {
            resolve(newImage)
        };
        newImage.onerror = function(err) {
            reject(err)
        };
        newImage.src = src;
    });
}

loadImg('www').then(res => {
    
});
```
