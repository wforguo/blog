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
mv -f dist.tar.gz /root/www/blog
cd /root/www/blog
tar -xzvf dist.tar.gz
rm -rf dist.tar.gz
```
