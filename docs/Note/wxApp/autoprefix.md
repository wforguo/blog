# wepy 编译less添加css前缀（autoprefix）

> wepy、autoprefix

wepy的编译默认是没有css autoprefix，所以就有样式兼容性的问题了；

需要手动去添加配置，如下：

## 1.安装

执行
```bash
npm install less-plugin-autoprefix save
```

## 2.配置

在 `wepy.config.js`中，

先导入`LessPluginAutoPrefix`插件，然后添加配置即可

```javascript
// css前缀
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
// ...
// ...
module.exports = {
 compilers: {
        less: {
            compress: prod,
            // less编译配置，添加LessPluginAutoPrefix插件
            plugins: [new LessPluginAutoPrefix({ browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6'] 				   
            })]
        },
  };
  
```
