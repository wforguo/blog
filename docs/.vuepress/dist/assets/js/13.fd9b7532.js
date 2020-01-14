(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{216:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"koa应用的部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa应用的部署"}},[s._v("#")]),s._v(" koa应用的部署")]),s._v(" "),t("h2",{attrs:{id:"创建koa2项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建koa2项目"}},[s._v("#")]),s._v(" 创建koa2项目")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g koa-generator\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start 是 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" stop 是 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run stop 的简写\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" 是 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" 的简写\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" restart 是 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run stop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run restart "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start的简写\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"部署（centos）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署（centos）"}},[s._v("#")]),s._v(" 部署（Centos）")]),s._v(" "),t("ul",[t("li",[s._v("登录服务器：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" root@106.12.182.39\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("上传项目到服务器，并安装依赖")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以"),t("code",[s._v("npm run start")]),s._v(" 测试下项目能不能跑起来")]),s._v(" "),t("p",[s._v("但是，当我们退出服务器后，node的进程也就关了，服务也就没了，")]),s._v(" "),t("p",[s._v("所以我们需要 pm2 来守护进程")]),s._v(" "),t("ul",[t("li",[s._v("安装pm2")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install pm2 -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装完成后云服务切换到你项目所在路径")]),s._v(" "),t("ul",[t("li",[s._v("启动并监听服务:")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pm2 start ./bin/www --watch\n\n## --watch参数，koa2应用代码发生变化时，pm2会帮你重启服务。\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("启动之后，显示如下：说明启动成功！")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.forguo.com/assets/imgs/pm2-start.png",alt:"cmd-markdown-logo"}})]),s._v(" "),t("ul",[t("li",[s._v("pm2更多")])]),s._v(" "),t("p",[s._v("pm2 start ./bin/www // 开启\npm2 stop ./bin/www // 关闭\npm2 list //查看所用已启动项目：")]),s._v(" "),t("p",[s._v("pm2列表查看，"),t("code",[s._v("pm2 list")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.forguo.com/assets/imgs/pm2-list.png",alt:"cmd-markdown-logo"}})]),s._v(" "),t("p",[s._v("输入 "),t("code",[s._v("pm2 show 0")]),s._v(" 对应上图中的id = 0")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.forguo.com/assets/imgs/pm2-show.png",alt:"cmd-markdown-logo"}})]),s._v(" "),t("p",[s._v("pm2杀死进程，"),t("code",[s._v("pm2 kill")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.forguo.com/assets/imgs/pm2-kill.png",alt:"cmd-markdown-logo"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);