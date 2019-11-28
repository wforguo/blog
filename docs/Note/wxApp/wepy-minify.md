# wepy开启代码压缩

## wepy压缩代码

每次开启`wepy build --watch`，代码并没有开启压缩，

`wepy` 配置默认只有生成环境才会去压缩；


只有当你执行 `npm run build` 的时候才会去做相应的压缩，但是相关依赖默认并没有，需要手动去添加和配置。

### 1.添加相关依赖

```bash
npm install wepy-plugin-imagemin --save-dev

npm install wepy-plugin-uglifyjs --save-dev

npm install cross-env --save-dev
```

### 2.压缩

在项目上线钱压缩，

执行 `npm run build` 即可

:::tip 
如果 `npm run build`有报错，或者执行不下去，执行 `npm i`，重新安装下依赖即可
:::
