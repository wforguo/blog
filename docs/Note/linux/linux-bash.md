## Linux常用命令

*2019/11/20*

> Linux常用命令

Jenkins部署之后的操作；

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
