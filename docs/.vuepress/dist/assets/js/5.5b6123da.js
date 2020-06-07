(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(s,a,t){s.exports=t.p+"assets/img/linux-file.20b64d26.png"},237:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[s._v("#")]),s._v(" Linux常用命令")]),s._v(" "),e("p",[e("em",[s._v("2019/11/20")])]),s._v(" "),e("blockquote",[e("p",[s._v("Linux常用命令")])]),s._v(" "),e("h2",{attrs:{id:"linux-目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-目录结构"}},[s._v("#")]),s._v(" Linux 目录结构")]),s._v(" "),e("p",[e("img",{attrs:{src:t(203),alt:"cmd-markdown-logo"}})]),s._v(" "),e("h2",{attrs:{id:"linux目录与文件管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux目录与文件管理"}},[s._v("#")]),s._v(" Linux目录与文件管理")]),s._v(" "),e("h2",{attrs:{id:"刷新本地包索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷新本地包索引"}},[s._v("#")]),s._v(" 刷新本地包索引")]),s._v(" "),e("pre",[e("code",[s._v("`sudo apt update`\n")])]),s._v(" "),e("h2",{attrs:{id:"登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[s._v("#")]),s._v(" 登录")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" root@106.12.182.39\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"git安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git安装"}},[s._v("#")]),s._v(" Git安装")]),s._v(" "),e("p",[e("code",[s._v("sudo apt-get install git")])]),s._v(" "),e("p",[e("code",[s._v("yum install -y git")])]),s._v(" "),e("h2",{attrs:{id:"node安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node安装"}},[s._v("#")]),s._v(" Node安装")]),s._v(" "),e("ul",[e("li",[s._v("从存储库安装Node.js：")])]),s._v(" "),e("p",[e("code",[s._v("sudo apt install nodejs")])]),s._v(" "),e("ul",[e("li",[s._v("需要额外安装npm。你可以通过输入以下命令来完成")])]),s._v(" "),e("p",[e("code",[s._v("sudo apt install npm")])]),s._v(" "),e("h2",{attrs:{id:"docker-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[s._v("#")]),s._v(" docker 安装")]),s._v(" "),e("ul",[e("li",[s._v("复制一个.env")])]),s._v(" "),e("p",[e("code",[s._v("cp -n .env.example .env")])]),s._v(" "),e("p",[e("code",[s._v("docker-compose build")])]),s._v(" "),e("p",[e("code",[s._v("docker-compose run --rm web config generate-secret-key")])]),s._v(" "),e("p",[e("code",[s._v("docker volume create --name=sentry-data && docker volume create --name=sentry-postgres")])]),s._v(" "),e("h2",{attrs:{id:"docker升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker升级"}},[s._v("#")]),s._v(" docker升级")]),s._v(" "),e("p",[s._v("https://www.cnblogs.com/wdliu/p/10194332.html")]),s._v(" "),e("h2",{attrs:{id:"mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[s._v("#")]),s._v(" MongoDB")]),s._v(" "),e("h4",{attrs:{id:"创建数据库目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库目录"}},[s._v("#")]),s._v(" 创建数据库目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /data/db\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"安装位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装位置"}},[s._v("#")]),s._v(" 安装位置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /usr/local/mongodb/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),e("p",[s._v("指定db和log路径")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("./mongod  --auth --dbpath"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/db --port "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("27019")]),s._v("  --logpath"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/db/logs --logappend --fork\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("正常运行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./mongod  --auth\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("后台运行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo ./mongod --logappend\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"链接数据库-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链接数据库-shell"}},[s._v("#")]),s._v(" 链接数据库(shell)")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("./mongo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"创建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),e("ul",[e("li",[s._v("创建admin表，并新建用户名和密码")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("\ndb.createUser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(",pwd: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2333!'")]),s._v(",roles: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(", db: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"jenkins部署之后的操作；"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins部署之后的操作；"}},[s._v("#")]),s._v(" Jenkins部署之后的操作；")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 找到目标目录")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##  将 /dist 下的所有文件及目录打包到指定目录，并使用 gz 压缩")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##  z使用zip压缩")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf dist.tar.gz *\n \n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##  移动至Nginx项目目录下")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -f dist.tar.gz /root/www/blog\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/www/blog\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##  解压")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf dist.tar.gz\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##  删除压缩包")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf dist.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);