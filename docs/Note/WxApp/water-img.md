# 小程序中图片添加水印

> Taro、图片水印

## 思路

利用`canvas`画图，将上传的图片画到`canvas`，再加入自定义的元素，最终导出图片即可。

## 实现

> 以下代码和Api均为Taro实现

- 首页，需要在页面放置`canvas`标签，`canvasWidth`和`canvasHeight`根据需要添加水印的图片宽高动态计算。

```jsx harmony
   <View className='canvas-water'>
        <Canvas
          style={{
            width: canvasWidth + 'px',
            height: canvasHeight + 'px',
          }} canvasId='canvasWater'
        />
    </View>
```

> 由于小程序中`canvas`层级的特殊性，需要做一下特殊处理。

```scss
    .canvas-water {
        opacity: 0;
        width: 0;
        height: 0;
        visibility: hidden;
        position: absolute;
        z-index: -999;
        left: -99999px;
        top: -99999px;
        transform: translate(-99999px, -99999px,-99999px);
        canvas {
            position: absolute;
            z-index: -999;
            left: -99999px;
            top: -99999px;
            transform: translate(-99999px, -99999px,-99999px);
        }
    }
```

- 上传图片，获得图片数据

```jsx harmony
return new Promise(async (resolve, reject) => {
    Taro.chooseImage({
       count: 1,            // 最大上传张数，只允许一张
       sizeType: ['compressed'], // 图片类型，默认缩略图
       sourceType: ['album', 'camera'], // 照片源，相册及相机
    }).then(res => {
        if (res.errMsg !== 'chooseImage:ok') {
            Taro.showToast({
                icon: 'none',
                title: '读取失败，请重新选择照片'
            });
            reject(res);
        }
        // tempFilePath可以作为img标签的src属性显示图片
        resolve(res.tempFiles[0].path);
    }, (err) => {
        reject(err);
    });
});
```

- 获取图片信息，设置`canvas`宽高

```jsx harmony
    let imgData = '...'; // 上一步上传图片获得的数据
    // 获取图片宽高信息
    Taro.getImageInfo({
        src: imgData
    }).then(imgInfo => {
        // 设置canvas宽高
        this.setState({
            canvasWidth: imgInfo.width,
            canvasHeight: imgInfo.height,
        }, () => {
            // 可以等state完成后再去添加水印操作
            // 添加水印
            // ...
        });
    }, () => {
    });
```

- 通过canvas画图添加水印

> 网络图片需要下载才能绘制

```jsx harmony

/**
 * 绘制图片水印
 * @param canvasId 
 * @param imgData 上传的图片data
 * @param imgInfo 图片信息（宽、高）
 */
const drawImageWater = (canvasId, imgData, imgInfo) => {
    const nowTime = `2020.11.11`;
    return new Promise(async (resolve, reject) => {
        const ctx = Taro.createCanvasContext(canvasId); // 获取canvas上下文
        // 清空画布内容，清除上次绘制内容
        ctx.clearRect(0, 0, imgInfo.width, imgInfo.height);
        
        ctx.setGlobalAlpha(1);
        // 先将上传的图片绘制到canvas
        ctx.drawImage(imgData, 0, 0, imgInfo.width, imgInfo.height);

        /*** 添加网络图片的操作 S ***/
        // logo,网络图片需要下载才能绘制
        let iconSpace = await Taro.downloadFile({
            url: 'https://forguo-1302175274.cos.ap-shanghai.myqcloud.com/mobile-404.png'
        });
        ctx.drawImage(iconSpace.tempFilePath, imgInfo.width / 2 - 76, imgInfo.height / 2 - 58, 152, 58);
        /*** 添加网络图片的操作 E ***/

        /*** 添加字体的操作 S ***/
        ctx.setGlobalAlpha(0.75);
        ctx.setFontSize(Math.round(24)); // 43 动态计算字体大小
        ctx.setFillStyle('#fff');
        ctx.setTextAlign('center');
        ctx.setTextBaseline('bottom');
        // 当前日期
        ctx.fillText(nowTime, imgInfo.width / 2,  imgInfo.height / 2 + 65);
        /*** 添加字体的操作 E ***/
        
        ctx.draw(true, () => {
            // canvas转图片
            Taro.canvasToTempFilePath({
                fileType: 'jpg',
                quality: 0.8,
                x: 0,
                y: 0,
                width: imgInfo.width,
                height: imgInfo.height,
                destWidth: imgInfo.width,
                destHeight: imgInfo.height,
                canvasId: canvasId,
            }).then(res => {
                resolve(res.tempFilePath);
            }, (e) => {
                reject(e);
            });
        });
    });
};

```

- 添加水印结束，将得到的图片上传到服务器即可

> 用得到的临时文件路径直接使用`Taro.uploadFile`上传

```js
Taro.uploadFile({
    url: params.url,
    method: params.method || 'get',
    filePath: params.filePath,
    name: params.name,
    success: (res) => {
    },
    fail: (err) => {
    },
    complete: () => {
    }
})
```
