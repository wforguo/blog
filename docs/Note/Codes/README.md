# 代码段

> 代码段

https://mp.weixin.qq.com/s/ISpEN8BoJOrMirF9OFz87A


## 获取当前日期的三个月前的日期

[日期Api](https://www.runoob.com/jsref/jsref-setmonth.html)

### 1、思路

- 先获取当前时间戳
- 修改月份
- 返回修改后的时间戳

### 2、使用到的方法

setMonth() 方法用于设置月份。

**注意：** 一月为 0， 十二月为 11

这个方法可用于设置月份中的某一天。

该值介于 0（一月） ~ 11（十二月） 之间：

##### 参数值
- -1 为去年的最后一个月
- 12 为明年的第一个月
- 13 为明年的第二个月

### 3、编码

```javascript
    // 当前日期
    let now = new Date();
    // 获取当前日期的前三个月的月份
    let pastMonth = now.getMonth() - 3;
    // 修改月份，如果前三个月对应没有该日期，则向后延顺
    now.setMonth(pastMonth);
    return now;
```

> 假设：
> 当前时间是`2020/03/31`，`setMonth(1)`，也就是修改为2月，那最终返回的是`2020/03/02`，
因为2020年2月没有31号，从29号往后顺延两天，也就是`2020/03/02`

## 获取URL的查询参数

```
// 获取URL的查询参数
q={};location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);q;
```

## 正确返回字符串长度的函数

```javascript
// ES6
function length(str) {
  return [...str].length;
}
```

## 数组去重

```
  var array = [1, 2, 1, 1, '1'];
  function unique(array) {
    var obj = {};
    return array.filter(function(item, index, array){
      return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
  }

```

## Wepy采坑

使用微信小程序框架wepy.js是报错 `'wx' is not defined  no-undef`

 在.eslintrc.js文件中加入以下内容

```
  globals: { wx: true },

```

## 页面强制以最新的IE浏览器模式渲染

```html

<meta http-equiv="x-ua-compatible" content="ie=edge">

```
 ~~IE11文档模式已经被弃用~~


## IOS 设备判断

```
   if ((/\(i[^;]+;( U;)? CPU.+Mac OS X/).test(navigator.userAgent)) {
       ...
   }
```

## webpack 配置css打包的浏览器

```
  "browserslist": [
    "Android 2.3",
    "Android >= 4",
    "Chrome >= 20",
    "Firefox >= 19",
    "Explorer >= 8",
    "iOS >= 6",
    "Opera >= 12",
    "Safari >= 6"
  ]

```

## camelize：横线转驼峰命名

```

let camelizeRE = /-(\w)/g;
function camelize(str) {
    return str.replace(camelizeRE, function(_, c) {
        return c ? c.toUpperCase() : '';
    })
}
//ab-cd-ef ==> abCdEf
//使用记忆函数
let _camelize = cached(camelize)

```

## hyphenate：驼峰命名转横线命名：拆分字符串，使用 - 相连，并且转换为小写

```

let hyphenateRE = /\B([A-Z])/g;
function hyphenate(str){
    return str.replace(hyphenateRE, '-$1').toLowerCase()
}
//abCd ==> ab-cd
//使用记忆函数
let _hyphenate = cached(hyphenate);

```

## unique：数组去重，返回一个新数组


```
function unique(arr){
    if(!isArrayLink(arr)){ //不是类数组对象
        return arr
    }
    let result = []
    let objarr = []
    let obj = Object.create(null)

    arr.forEach(item => {
        if(isStatic(item)){//是除了symbol外的原始数据
            let key = item + '_' + getRawType(item);
            if(!obj[key]){
                obj[key] = true
                result.push(item)
            }
        }else{//引用类型及symbol
            if(!objarr.includes(item)){
                objarr.push(item)
                result.push(item)
            }
        }
    })

    return resulte
}

```

## 根据 图片Orientation旋转图片，得到base64

```
/**
 * 根据 图片Orientation旋转图片，得到base64
 * @param  {Object} options:图片数据
 * @options {String} base64:图片角度
 * @options {Num} width:图片宽
 * @options {Num} height:图片高
 * @options {Num} quality:图片质量
 */

```

```
export const fistImg = (options) => {
    if( !options) {
        throw 'missing arguments options';
    }
    let img = options.img;
    let orientation = options.orientation;
    let width = options.width;
    let height = options.height;
    let canvas = document.createElement('canvas');
    canvas.id = 'fistImg';
    let ctx = canvas.getContext('2d');

    switch (orientation) {
        case 3:
            canvas.width = width;
            canvas.height = height;
            ctx.translate(canvas.width, canvas.height);
            ctx.rotate(180 * Math.PI / 180);
            break;
        case 6:
            canvas.width = height;
            canvas.height = width;
            ctx.translate(canvas.width, 0);
            ctx.rotate(90 * Math.PI / 180);
            break;
        case 8:
            canvas.width = height;
            canvas.height = width;
            ctx.translate(0, canvas.height);
            ctx.rotate(270 * Math.PI / 180);
            break;
        default:
            canvas.width = width;
            canvas.height = height;
        // ctx.translate(canvas.width, canvas.height);
    }
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/jpeg",options.quality||.8);
};

```

```
  //禁止页面下拉
  var overscroll = function(el){
        el.addEventListener('touchstart', function(){
            var top = el.scrollTop;
            var totalScroll = el.scrollHeight;
            var currentScroll = top + el.offsetHeight;
            if(top === 0) {
                el.scrollTop = 1;
            }else if(currentScroll === totalScroll){
                el.scrollTop = top - 1;
            }
        });
        el.addEventListener('touchmove', function(evt){
            if(el.offsetHeight < el.scrollHeight){
                evt._isScroller = true;
            }
        });
    }

	overscroll(document.querySelector('.cover'));//哪里需要可以局部滚动，添加一个“scroll”的class
        document.body.addEventListener('touchmove', function(evt) {
            if(!evt._isScroller){
                evt.preventDefault();
            }
        });

	// 有表单时，页面位移
	$('body').height($(window).height());


	// 移动端禁止滑动
	document.addEventListener("touchmove", function (e) {
		e.preventDefault()
	}, { passive: false })


	// 随机数
	function random(min, max) {
		if(max == null) {
			max = min;
			min = 0;
		}
		return min + Math.floor(Math.random() * (max - min + 1));
	};


	// 移动设备判断

	//移动端左右边距
	if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
		document.getElementsByTagName("body")[0].style.minWidth = "1028px";
	}


	### 微信段

	// 微信下媒体播放
    if(WeixinJSBridge && /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		WeixinJSBridge.invoke('getNetworkType', {},
			function(e) {
				speak.pause();
			});
	} else {
		speak.pause();
	}



	//禁用分享
	function onBridgeReady() {
		WeixinJSBridge.call('hideOptionMenu');
	}

	if(typeof WeixinJSBridge == "undefined") {
		if(document.addEventListener) {
			document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
		} else if(document.attachEvent) {
			document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
			document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
		}
	} else {
		onBridgeReady();
	}
	/*end禁用微信分享功能?*/


	/* 仅限制微信打开start */

	// 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
	var useragent = navigator.userAgent;
	if(useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
		// 这里警告框会阻塞当前页面继续加载
		alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
		// 以下代码是用javascript强行关闭当前页面
		var opened = window.open('about:blank', '_self');
		opened.opener = null;
		opened.close();
	}

	/* 仅限制微信打开end */



	/* 关闭浏览器 s */

	setTimeout(function () {
		window.WeixinJSBridge && window.WeixinJSBridge.call('closeWindow');
	}, 800);
	/* 关闭浏览器 e */

```


## 禁止页面滑动与开启

```
    document.body.addEventListener('touchmove', this.bodyScroll, { passive: false });

    document.body.removeEventListener('touchmove', this.bodyScroll, { passive: false });


    bodyScroll (event) {
        event.preventDefault();
    }

```
