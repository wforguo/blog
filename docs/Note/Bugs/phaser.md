# Phaser

> Phaser

* 1.说明：

##### phaser在处理成失去焦点后动画停止，是从浏览器的性能上去考虑。

```
// 防止浏览器失去焦点后动画暂停
game.stage.disableVisibilityChange = true;
```

* 2.说明：

##### 首先图片是支持跨域请求，可以在图片服务器上添加Access-Control-Allow-Origin，这样后面的设置才能生效，
##### 可以在设置动画使用Phaser.CANVAS渲染，图片资源请求就可以了；
##### 如果你想使用webgl，这时可以设置game.load.crossOrigin="anonymous"。

```
// 解决图片资源跨域问题
game.load.crossOrigin = 'anonymous';
```
