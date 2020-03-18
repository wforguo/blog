# 图片懒加载

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图片懒加载</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            border: 0;
        }
        html,body {
            width: 100%;
            height: 100%;
        }
        .container {
            width: 100%;
        }
        .width-fix {
            width: 100%;
            height: 600px;
        }
        img {
            display: block;
            width: 512px;
            height: 320px;
            margin: 50px auto;
            background: #f5f5f5;
        }
    </style>
</head>
<body>

<div class="container" id="container">

    <div class="width-fix" style=""></div>
    <div class="width-fix" style=""></div>
    <div class="width-fix" style=""></div>
    <div class="width-fix" style=""></div>

    <img data-src="https://hbwalk-1300038393.cos.ap-shanghai.myqcloud.com/20190906/45d22d3c2154c9e9947850b079fcb608.png" class="lazy-load">
    <img data-src="https://hbwalk-1300038393.cos.ap-shanghai.myqcloud.com/20190904/613dca6c916fb55b657da44c854cdcc3.png" class="lazy-load">
    <img data-src="https://hbwalk-1300038393.cos.ap-shanghai.myqcloud.com/20190906/e3079ecc8f5b63bc2dd1810c8566b633.png" class="lazy-load">
    <img data-src="https://hbwalk-1300038393.cos.ap-shanghai.myqcloud.com/20190906/f23c21d38a32236da4f978abc315d55c.png" class="lazy-load">

</div>

</body>

<script type="text/javascript">
    // 获取所有的需要懒加载的图片标签
    let lazyImgList = document.getElementsByClassName('lazy-load');
    let before = 0;
    // 懒加载图片数量
    let lazyImgListLength = lazyImgList.length;

    // 一个视口的高度
    let wdh = document.documentElement.getBoundingClientRect();
    let pageHeight = wdh.height;

    const lazyLoad = () => {
        // 页面已滑动距离
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // 遍历需要懒加载图片
        for (let i = 0;i < lazyImgListLength;i ++) {
            // console.log('%t', i, pageHeight[i].offsetTop);
            // 当前图片距离顶部的距离
            let offsetTop = lazyImgList[i].offsetTop;

            // 如果当前图片距离顶部距离，小于视口高度+滑动高度，改变图片src
            // 如要提前进入，适当调节 before的值（正数）
            if (offsetTop < pageHeight + scrollTop + before) {
                lazyImgList[i].src = lazyImgList[i].getAttribute('data-src');
            }
        }
    };

    // 监听页面滑动事件
    window.addEventListener('scroll', lazyLoad, false);

</script>
</html>

```
