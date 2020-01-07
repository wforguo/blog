# Linux常用命令

*2019/11/20*

> Linux常用命令

## 刷新本地包索引

    `sudo apt update`

## 登录

```bash
    ssh -p 22 root@106.12.182.39
```
## Git安装

  `sudo apt-get install git`
  
  `yum install -y git`

## Node安装

- 从存储库安装Node.js：

`sudo apt install nodejs`

- 需要额外安装npm。你可以通过输入以下命令来完成
  
`sudo apt install npm`

## docker 安装

- 复制一个.env

`cp -n .env.example .env`

`docker-compose build`

`docker-compose run --rm web config generate-secret-key`

`docker volume create --name=sentry-data && docker volume create --name=sentry-postgres`


## docker升级

https://www.cnblogs.com/wdliu/p/10194332.html



## MongoDB

#### 创建数据库目录

```
mkdir -p /data/db
```

#### 安装位置

```
cd /usr/local/mongodb/bin
```

#### 启动服务
        
指定db和log路径   

```bash
./mongod  --auth --dbpath=/data/db --port 27019  --logpath=/data/db/logs --logappend --fork
```

正常运行

```
./mongod  --auth
```

后台运行

```
sudo ./mongod --logappend
```

#### 链接数据库(shell)

```bash
./mongo
```

#### 创建用户    

- 创建admin表，并新建用户名和密码

```bash

db.createUser({user: "admin",pwd: '2333!',roles: [{role: "userAdminAnyDatabase", db: "admin"}]})

```

## Jenkins部署之后的操作；

```shell script
    ## 找到目标目录
    cd docs/.vuepress/dist

    ##  将 /dist 下的所有文件及目录打包到指定目录，并使用 gz 压缩
    ##  z使用zip压缩
    tar -zcvf dist.tar.gz *
 

    ##  移动至Nginx项目目录下
    mv -f dist.tar.gz /root/www/blog
    cd /root/www/blog

    ##  解压
    tar -xzvf dist.tar.gz

    ##  删除压缩包
    rm -rf dist.tar.gz
```


## koa应用的部署

####  创建koa2项目

```bash
npm install -g koa-generator
```

```bash
npm start 是 npm run start
npm stop 是 npm run stop 的简写
npm test 是 npm run test 的简写
npm restart 是 npm run stop && npm run restart && npm run start的简写
```

#### 部署（Centos）

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
