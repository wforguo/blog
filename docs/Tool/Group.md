
# 项目结构说明

```
├── .bin                                # Webpack 配置文件
├── build                               # 打包文件
├── node_modules                        # 依赖的模块包（NutUI、postcss-plugin-px2rem）
├── package.json                        # 项目基本信息
├── src                                 # 项目的核心组件
│   ├── asset                           # 资源文件（css、image）
│   ├── component                       # 公共组件
│   ├── config                          # 环境配置文件（evn.ts）
│   ├── icons                           # 存放 svg 格式图标
│   ├── services                        # HTTP 请求配置（HttpClient.ts、GoodsApiService.ts）
│   ├── store                           # 状态管理（vuex）
│   ├── view                            # 根据业务场景开发的组件
│   ├── util                            # 公共方法(util.ts、imgSet.ts、appHelper.ts)
│   ├── app.vue                         # 根组件
│   ├── app.ts                          # 入口文件
│   ├── router.ts                       # 页面路由
│   ├── index.html                      # 主页模板
│   ├── vue-shim-extend.d.ts            # 扩展 Vue 全局类型声
│   └── vue-shim.d.ts                   # TypeScript 支持 *.vue 文件配置
├── static                              # 静态资源（ico图标、vendor.dll.js）
├── README.md                           # 项目描述信息（一些方法使用的注意事项）
└── tsconfig.json                       # TypeScript 编译设置

```
