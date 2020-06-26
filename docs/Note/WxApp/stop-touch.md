# 小程序页面滚动穿透

## 一、场景

- 在项目当中，基础遇到这样的需求

有一个长列表，或者其他可滚动展示的页面，
在这个页面会弹出一个`Modal`层，如下：

> 贝壳找房的 的筛选栏

<img src="https://forguo-1302175274.cos.ap-shanghai.myqcloud.com/blog/imgs/beike.jpg" alt="贝壳找房的" width="400" align="bottom" />

## 二、问题

如果这个弹框内容不可滚动，不会有太大问题；

但是当弹出内容是可以滚动的时候，就会有问题，

触摸没有滚动的区域会发现滚动可以穿透，会传递给下面的列表页面，

## 三、解决办法

程序员是面向Google编程的，找到了下面的解决办法：

- 监听弹框状态，如果弹框展示就给列表 添加对应样式

```jsx harmony
 // isShowMask 弹框是否展示
 <view class="dog-container {{isShowMask ? 'bottom-fixed' : ''}}"></view>
```

```css
.bottom-fixed {
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
}
```

- 给遮罩层添加 `catchtouchmove`的阻止

```jsx harmony
myCatchTouch: function () {
    return;
}
<view wx:if="{{alert}}" catchtouchmove="myCatchTouch">
    <template is="alert" data="{{alertData}}" />
</view>
```

这样的话，底部的列表内容就不会出现溢出，也自然不会滚动，

::: warning
但是，这样的做法有一个弊端，

不会去记录我之前访问的位置，也就是每次点开弹框，列表位置会归零，体验终归是不好的。
:::


## 四、升级方案

于是我去翻了一些开源小程序UI的Demo，去试试看这种弹框类型的交互，

最后发现在`Taro UI`中有一个组件，`Float LayOu`，是没有出现穿透的，列表位置也没有发生改变，

> [Taro UI](https://taro-ui.jd.com/#/) 一套基于 [Taro](https://taro.aotu.io/) 框架开发的多端 UI 组件库



- 于是，我翻了源码，发现他是这样写的（有删减）：

```jsx harmony
  // 重点A：阻止事件冒泡
  handleTouchMove = (e) => {
    e.stopPropagation()
  }
  render() {
    return (
      <View className='rootClass' onTouchMove={this.handleTouchMove}>
        <!-- 遮罩层 --> 
        <View onClick={this.close} className='at-float-layout__overlay' />
        <View className='at-float-layout__container layout'>
          <View className='layout-body'>
            <!-- 重点B: ScrollView（开启scrollY）--> 
            <ScrollView
              scrollY
              scrollX={false}
              className='layout-body__content'
            >
              {this.props.children}
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
```

- 思路解析：

i、首先，需要在自定义弹框的根元素，添加 `onTouchMove` 监听，并阻止时间的冒泡

```jsx harmony

    <View className='rootClass' onTouchMove={this.handleTouchMove}>

```

ii、但是，里面的内容，就不能滚动了，那么，可以使用 `ScrollView`代替`View`，并开启Y轴的滚动

```jsx harmony
    <ScrollView
        scrollY
        scrollX={false}
        className='layout-body__content'
    >
    <!-- 内容区域-->
    <!-- 内容区域-->
    </ScrollView>
```

按照这样的思路，我在项目里面尝试了下，果然奏效，这样的方式更优雅体验也更好。

笔者使用了Taro，但原理都是一样的。

- 最终效果：

 <img src="https://forguo-1302175274.cos.ap-shanghai.myqcloud.com/blog/imgs/touch-flow.gif" alt="最终效果" width="400" align="bottom" />


## 五、关于`stopPropagation`

简单来说：

::: tip
`JavaScript`中，冒泡和捕获是事件流的两种行为，使用event.stopPropagation()可以起到阻止捕获和冒泡阶段中当前事件的进一步传播。

而使用event.preventDefault()可以取消默认事件。
:::

##### 事件流

> 事件流描述的是从页面中接受事件的顺序，分为

- IE的事件流是 事件冒泡流，

- 标准的浏览器事件流是 事件捕获流。


好了，希望对大家有用，对事件流有兴趣的可以自行Google

或者看下这片文章：[JavaScript的事件流](https://juejin.im/post/5d11e0df6fb9a07f014f0401#heading-23)

<br />

Ending...

<br />
<br />

[csdn](https://blog.csdn.net/WEIGUO19951107)

[github](https://github.com/wforguo)

[个人站点](https://www.forguo.com/blog/)
