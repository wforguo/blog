# Git基本操作

> Git命令行


### 新建一个Git仓库

```bash

echo "# dz-share" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/forguos/dz-share.git
git push -u origin master

```


### 已存在Git仓库

```bash
git remote add origin https://github.com/forguos/dz-share.git
git push -u origin master

```

### 删除一个远程仓库

```bash
git remote rm origin
```

### 修改分支名称

#### 1. 本地分支重命名(还没有推送到远程)

```
git branch -m oldName newName
```

#### 2. 远程分支重命名 (已经推送远程-假设本地分支和远程对应分支名称相同)
a. 重命名远程分支对应的本地分支

```
git branch -m oldName newName
```

b. 删除远程分支

```
git push --delete origin oldName
```

c. 上传新命名的本地分支

```
git push origin newName
```

d.把修改后的本地分支与远程分支关联

```
git branch --set-upstream-to origin/newName
```
