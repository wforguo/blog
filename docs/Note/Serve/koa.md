# koa应用的部署

##  创建koa2项目

```bash
npm install -g koa-generator
```

```bash
npm start 是 npm run start
npm stop 是 npm run stop 的简写
npm test 是 npm run test 的简写
npm restart 是 npm run stop && npm run restart && npm run start的简写
```

## 部署（Centos）

- 登录服务器：

```bash
    ssh -p 22 root@106.12.182.39
```

- 上传项目到服务器，并安装依赖

```bash
npm install
```

可以`npm run start` 测试下项目能不能跑起来

但是，当我们退出服务器后，node的进程也就关了，服务也就没了，

所以我们需要 pm2 来守护进程

- 安装pm2

```
npm install pm2 -g
```

安装完成后云服务切换到你项目所在路径

- 启动并监听服务:

```
pm2 start ./bin/www --watch

## --watch参数，koa2应用代码发生变化时，pm2会帮你重启服务。

```

启动之后，显示如下：说明启动成功！

![cmd-markdown-logo](https://cdn.forguo.com/assets/imgs/pm2-start.png)


- pm2更多

pm2 start ./bin/www // 开启
pm2 stop ./bin/www // 关闭
pm2 list //查看所用已启动项目：


pm2列表查看，`pm2 list`

![cmd-markdown-logo](https://cdn.forguo.com/assets/imgs/pm2-list.png)

输入 `pm2 show 0` 对应上图中的id = 0

![cmd-markdown-logo](https://cdn.forguo.com/assets/imgs/pm2-show.png)

pm2杀死进程，`pm2 kill`

![cmd-markdown-logo](https://cdn.forguo.com/assets/imgs/pm2-kill.png)

