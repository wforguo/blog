# jwt

> Json Web Token

## 鉴权方式对比

- jwt

- session/cookie 

koa-session

redis

bluebird

- oAuth 2.0 

## 什么是jwt

- HEADER:ALGORITHM & TOKEN TYPE 

```
{
     "alg": "HS256",
     "typ": "JWT"   
}
```

- PAYLOAD:DATA


```
{
  "_id": "5f12be46aed6152ef8f2ed9e",
  "userName": "admin",
  "iat": 1595740455,
  "exp": 1596345255
}
```

- VERIFY SIGNATURE

```

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
) secret base64 encoded

```

## 特点

- 防CSRF

- 适合移动应用

- 无状态，编码数据
 
## 原理
 


## 使用

