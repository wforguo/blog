# 小程序web-view覆盖原生组件

> web-view

## 一、web-view的使用

[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190630123304282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dFSUdVTzE5OTUxMTA3,size_16,color_FFFFFF,t_70)

 ```html
 <web-view class="map-box" src="https://www.forguo.com"> </web-view>
 ```
 
** 官方指出，小程序默认会覆盖其它所有的组件**

## 二、解决需求

### 需要在web-view页面上面加一个按钮，用来跳转到小程序的页面，

- 1.通过web-view的接口实现

```html
// <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>

// javascript
wx.miniProgram.navigateTo({url: '/path/to/page'})
wx.miniProgram.postMessage({ data: 'foo' })
wx.miniProgram.postMessage({ data: {foo: 'bar'} })
wx.miniProgram.getEnv(function(res) { console.log(res.miniprogram) })
```

~~但是需要等到web-view页面完全加载结束，这样对于小程序页面跳转的操作就有一定的延时了，
会导致跳转好多次的情况，而且不及时。~~ 

- 2.通过在web-view上面覆盖小程序的标签来实现了；
该方式官方没有指出（但亲测有效）
选择`cover-view`覆盖在`web-view`上面，将`coevr-view`写到`web-view`里面

需要将该`coevr-view`样式`fixed`，层级`z-index: 99999`（越大越好）

```css
   .tool-bar {
        color: #fff;
        position: fixed;
        bottom: 13%;
        right: 0rpx;
        width: 136rpx;
        height: 236rpx;
        border-radius: 8rpx;
        z-index: 999999;
        /*box-shadow: 0px 0px 15px 4px  rgba(0,0,0,0.15);*/

        .nav-bg {
            width: 136rpx;
            height: 236rpx;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            border-radius: 8rpx;
        }

        .tool-btn {
            width:100rpx;
            height: 200rpx;
            position: absolute;
            top: 18rpx;
            left: 18rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
```

```html
        <web-view src="https://www.forguo.com">
            <cover-view class="tool-bar">
                <cover-image src="../../common/imgs/nav-bg.png" class="nav-bg"></cover-image>
                <cover-view class="tool-btn">
                    <cover-view>我的</cover-view>
                    <cover-view>订单</cover-view>
                </cover-view>
            </cover-view>
        </web-view>
```

> Tips: `cover-view`默认是不可以设置背景图及box-shadow的，如需：使用`cover-image`实现

当然，如果你写了发现，开发者工具没有显示，（调试样式可以先删掉src）

用手机打开试试，发现是可以的，（用不同的手机试试）

最终效果如图红色部分：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190630130026598.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1dFSUdVTzE5OTUxMTA3,size_16,color_FFFFFF,t_70)

## 三、继续采坑（如何兼容更多的手机）

当你发现在IOS可以显示以为就可以了，其实不是；

上面的写法，我用华为荣耀（安卓9和8）、Vivo（安卓7）、Oppo（安卓4）、三星S9（安卓8）都是可以的，

唯独在三星S6(安卓6)的手机不显示，然后就继续采坑了；

去网上找，说可以给`cover-view`的显示加个延时，一试果然有效

`html`加一个`wx:if`即可

```html
          <web-view src="https://www.forguo.com">
            <cover-view class="tool-bar" wx:if={{showNav}}>
                <cover-image src="../../common/imgs/nav-bg.png" class="nav-bg"></cover-image>
                <cover-view class="tool-btn">
                    <cover-view>我的</cover-view>
                    <cover-view>订单</cover-view>
                </cover-view>
            </cover-view>
        </web-view>
```

```javascript
    data = {
            showNav: false, // 默认不显示
	}

	// wepy 下开发，不用setData就可以
	onLoad() {
          setTimeout(() => {
               this.showNav = true;
               this.$apply();
           }, 300);
	}
```

好了，大功告成；

如果大家用这种方式在某些手机不显示，欢迎留下手机型号一起探讨；


ending...
