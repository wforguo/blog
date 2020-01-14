# Nginx基本配置

> Nginx

## 基本命令

- 安装

```shell script
yum install nginx
```

- 查看版本号

```shell script
nginx -v
```

- 重启nginx

```shell script
nginx -s reload
```

- 验证配置是否正确

```shell script
 ./nginx -t
```

- Nginx正常启动：
```shell script
nginx
```

- 快速停止或关闭Nginx
```shell script
./nginx -s stop
```

- 正常停止或关闭Nginx
```shell script
./nginx -s quit
```

- 配置文件修改重装载命令
```shell script
./nginx -s reload
```

## 基本配置

```bash

user root;

# 设置工作进程的数量
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;
error_log /var/log/nginx/error.log;

include /usr/share/nginx/modules/*.conf;

events {
  #==最大连接数，一般设置为cpu*2048
  worker_connections  1024;
}


http {
  # 文件拓展名查找集合
  include             /etc/nginx/mime.types;
  # 当查找不到对应类型的时候默认值
  default_type  application/octet-stream;
  include /etc/nginx/conf.d/*.conf;
  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
  '$status $body_bytes_sent "$http_referer" '
  '"$http_user_agent" "$http_x_forwarded_for"';

  access_log  /var/log/nginx/access.log  main;

  # 调用 sendfile 系统传输文件
  sendfile        on;
  #tcp_nopush     on;

  # ==客户端链接超时时间
  # keepalive_timeout  0;
  keepalive_timeout  65;

  # 开启gzip 压缩
  gzip on;
  # 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）
  gzip_http_version 1.1;
  # 设置压缩级别，压缩级别越高压缩时间越长  （1-9）
  gzip_comp_level 4;
  # 设置压缩的最小字节数， 页面Content-Length获取
  gzip_min_length 1000;
  # 设置压缩文件的类型  （text/html)
  gzip_types text/plain application/javascript text/css;


  # server表示虚拟主机可以理解为一个站点，可以配置多个server节点搭建多个站点
  # 每一个请求进来确定使用哪个server由server_name确定

  # blog config
  server {
    #站点监听端口
    listen       80 default_server;
    listen       [::]:80 default_server;    #站点访问域名
    server_name  blog.forguo.com;

    #编码格式，避免url参数乱码
    charset utf-8;
    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    #location用来匹配同一域名下多个URI的访问规则
    #比如动态资源如何跳转，静态资源如何跳转等
    #location后面跟着的/代表匹配规则

    location / {
      #站点根目录，可以是相对路径，也可以使绝对路径
      root   /root/www/;
      #默认主页
      index  index.html index.htm;

      # 如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面
      try_files $uri $uri/ /index.html;
      #转发后端站点地址，一般用于做软负载，轮询后端服务器
      #proxy_pass http://10.11.12.237:8080;

      #拒绝请求，返回403，一般用于某些目录禁止访问
      #deny all;

      #允许请求
      #allow all;

      # add_header 'Access-Control-Allow-Origin' '*';
      # add_header 'Access-Control-Allow-Credentials' 'true';
      # add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
      # add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
  }

  # another virtual host using mix of IP-, name-, and port-based configuration
  #
  #server {
  #    listen       8000;
  #    listen       somename:8080;
  #    server_name  somename  alias  another.alias;

  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}


  # HTTPS server
  #
  #server {
  #    listen       443 ssl;
  #    server_name  localhost;

  #    ssl_certificate      cert.pem;
  #    ssl_certificate_key  cert.key;

  #    ssl_session_cache    shared:SSL:1m;
  #    ssl_session_timeout  5m;

  #    ssl_ciphers  HIGH:!aNULL:!MD5;
  #    ssl_prefer_server_ciphers  on;

  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}
}


```
