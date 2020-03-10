(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{211:function(s,n,a){"use strict";a.r(n);var t=a(28),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx基本配置"}},[s._v("#")]),s._v(" Nginx基本配置")]),s._v(" "),a("blockquote",[a("p",[s._v("Nginx")])]),s._v(" "),a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),a("ul",[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看版本号")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nginx -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("重启nginx")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nginx -s reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("验证配置是否正确")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" ./nginx -t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Nginx正常启动：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("快速停止或关闭Nginx")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./nginx -s stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("正常停止或关闭Nginx")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./nginx -s quit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("配置文件修改重装载命令")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./nginx -s reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\nuser root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置工作进程的数量")]),s._v("\nworker_processes  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  notice;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  info;")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pid        logs/nginx.pid;")]),s._v("\nerror_log /var/log/nginx/error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ninclude /usr/share/nginx/modules/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nevents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#==最大连接数，一般设置为cpu*2048")]),s._v("\n  worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件拓展名查找集合")]),s._v("\n  include             /etc/nginx/mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当查找不到对应类型的时候默认值")]),s._v("\n  default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  include /etc/nginx/conf.d/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  log_format  main  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_user")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_local")]),s._v('] "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v("\" '")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body_bytes_sent")]),s._v(' "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_referer")]),s._v("\" '")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_user_agent")]),s._v('" "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_x_forwarded_for")]),s._v("\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  access_log  /var/log/nginx/access.log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用 sendfile 系统传输文件")]),s._v("\n  sendfile        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ==客户端链接超时时间")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# keepalive_timeout  0;")]),s._v("\n  keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启gzip 压缩")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）")]),s._v("\n  gzip_http_version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置压缩级别，压缩级别越高压缩时间越长  （1-9）")]),s._v("\n  gzip_comp_level "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置压缩的最小字节数， 页面Content-Length获取")]),s._v("\n  gzip_min_length "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置压缩文件的类型  （text/html)")]),s._v("\n  gzip_types text/plain application/javascript text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server表示虚拟主机可以理解为一个站点，可以配置多个server节点搭建多个站点")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每一个请求进来确定使用哪个server由server_name确定")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# blog config")]),s._v("\n  server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#站点监听端口")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" default_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":80 default_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#站点访问域名")]),s._v("\n    server_name  blog.forguo.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编码格式，避免url参数乱码")]),s._v("\n    charset utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#charset koi8-r;")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  logs/host.access.log  main;")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location用来匹配同一域名下多个URI的访问规则")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#比如动态资源如何跳转，静态资源如何跳转等")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location后面跟着的/代表匹配规则")]),s._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#站点根目录，可以是相对路径，也可以使绝对路径")]),s._v("\n      root   /root/www/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认主页")]),s._v("\n      index  index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面")]),s._v("\n      try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#转发后端站点地址，一般用于做软负载，轮询后端服务器")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#proxy_pass http://10.11.12.237:8080;")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拒绝请求，返回403，一般用于某些目录禁止访问")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#deny all;")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许请求")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#allow all;")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add_header 'Access-Control-Allow-Origin' '*';")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add_header 'Access-Control-Allow-Credentials' 'true';")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page  404              /404.html;")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect server error pages to the static page /50x.html")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    error_page   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      root   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    proxy_pass   http://127.0.0.1;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    root           html;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_pass   127.0.0.1:9000;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_index  index.php;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    include        fastcgi_params;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deny access to .htaccess files, if Apache's document root")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# concurs with nginx's one")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ /\\.ht {")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    deny  all;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       8000;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       somename:8080;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  somename  alias  another.alias;")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HTTPS server")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       443 ssl;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  localhost;")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate      cert.pem;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate_key  cert.key;")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_cache    shared:SSL:1m;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_timeout  5m;")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_prefer_server_ciphers  on;")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br"),a("span",{staticClass:"line-number"},[s._v("157")]),a("br"),a("span",{staticClass:"line-number"},[s._v("158")]),a("br"),a("span",{staticClass:"line-number"},[s._v("159")]),a("br"),a("span",{staticClass:"line-number"},[s._v("160")]),a("br"),a("span",{staticClass:"line-number"},[s._v("161")]),a("br"),a("span",{staticClass:"line-number"},[s._v("162")]),a("br"),a("span",{staticClass:"line-number"},[s._v("163")]),a("br"),a("span",{staticClass:"line-number"},[s._v("164")]),a("br"),a("span",{staticClass:"line-number"},[s._v("165")]),a("br"),a("span",{staticClass:"line-number"},[s._v("166")]),a("br"),a("span",{staticClass:"line-number"},[s._v("167")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);