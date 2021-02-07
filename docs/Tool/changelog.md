## 自动版本管理和生成CHANGELOG

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

规范化的提交信息除了能很好描述项目的修改，还有一个很好的作用就是能根据提交记录来生成CHANGELOG.MD和自动生成版本号等功能。

### standard-version

一个用于生成`CHANGELOG.md`和进行`SemVer(语义化版本号)`发版的命令行工具

主要功能：
* 自动修改最新版本号，可以是`package.json`或者自定义一个文件
* 读取最新版本号，创建一个最新的`git tag`
* 根据提交信息，生成`CHANGELOG.md`
* 创建一个新提交包括 `CHANGELOG.md`和`package.json`

### 语义化版本控制(SemVer)

先简单了解下什么是语义化的版本控制，其是由`GitHub`发起的一份用于规范版本号递增的规则，

##### 版本格式
主版本号.次版本号.修订号，版本号递增规则如下：

* 主版本号(major)：当你做了不兼容的 API 修改，
* 次版本号(minor)：当你做了向下兼容的功能性新增，可以理解为Feature版本，
* 修订号(patch)：当你做了向下兼容的问题修正，可以理解为Bug fix版本。

先行版本号可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

##### 先行版本
当即将发布大版本改动前，但是又不能保证这个版本的功能 100% 正常，这个时候可以发布先行版本：

* alpha: 内部版本
* beta: 公测版本
* rc: 候选版本(Release candiate)

比如：1.0.0-alpha.0,1.0.0-alpha.1,1.0.0-rc.0,1.0.0-rc.1等。

`standard-version` 会根据提交的信息类型来自动更改对应的版本号,如下:
* feat: 次版本(minor)+1
* fix: 修订号(patch) +1
* BREAK CHANGE: 主板号(marjor) +1

> `standard-verstion` 生成的`CHANGELOG`只会包含`feat`,`fix`,`BREACK-CHANGE`类型的提交记录

#### 使用

``` bash
npm i --save-dev standard-version
