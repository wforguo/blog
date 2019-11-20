# BLOG

> BLOG - forguo

## Build Setup

- BLOG

``` bash


```

- 文档

```bash
# vuepress dev docs

"docs:dev": "vuepress dev docs",
    
# vuepress build docs

"docs:build": "vuepress build docs",

```


```bash
cd docs/.vuepress/dist
tar -zcvf dist.tar.gz *
// 将 /etc 下的所有文件及目录打包到指定目录，并使用 gz 压缩
// z使用zip压缩
mv -f dist.tar.gz /root/www/blog
cd /root/www/blog
tar -xzvf dist.tar.gz
rm -rf dist.tar.gz
```
