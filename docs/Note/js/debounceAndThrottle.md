
# 函数的节流和防抖

- 节流

```javascript

    const throttle = (func, wait) => {
        let previous = 0;
        return function() {
            let now = Date.now();
            let context = this;
            let args = arguments;
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }
    };

```

- 防抖

```javascript

    const debounce = (func, wait) => {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);

            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait);
        }
    };

```

- 简单实用


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>防抖与节流</title>
    <meta charset="utf-8">
    <style>
        * {
            margin: 0;
            padding: 0;
            border: 0;
        }
        .container {
            width: 100%;
            margin-top: 50px;
        }
        p {
            width: 275px;
            margin: auto;
        }
        .search {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 500px;
            margin: 30px auto;
            color: #000;
            line-height: 35px;
            height: 35px;
        }
        .search input {
            line-height: 35px;
            height: 35px;
            font-size: 16px;
            border: 1px solid #f3f3f3;
            margin-left: 20px;
            border-radius: 5px;
            padding: 0 10px;
        }
    </style>

</head>

<body>

<div class="container">
    <div class="search">
        <label>
            <span>防抖</span>
            <input type="text" class="search-input" placeholder="请输入搜索内容" id="searchInputDebounce"/>
        </label>
    </div>
    <div class="search">
        <label>
            <span>节流</span>
            <input type="text" class="search-input" placeholder="请输入搜索内容" id="searchInputThrottle"/>
        </label>
    </div>
</div>

</body>

<script type="text/javascript">

    /**
     * 防抖函数
     * 函数停止1s后执行
     * @param func
     * @param wait
     * @returns {Function}
     */
    const debounce = (func, wait) => {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);

            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait);
        }
    };

    /**
     * 节流函数
     * 1s执行一次目标函数
     * @param func
     * @param wait
     * @returns {Function}
     */
    const throttle = (func, wait) => {
        let previous = 0;
        return function () {
            let now = Date.now();
            let context = this;
            let args = arguments;
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }
    };

    // 监听input框的输入 - 防抖
    let $inputDebounce = document.getElementById('searchInputDebounce');
    $inputDebounce.addEventListener('input', debounce(() => {
        console.log($inputDebounce.value);
    }, 1000));

    // 监听input框的输入 - 节流
    let $inputThrottle = document.getElementById('searchInputThrottle');
    $inputThrottle.addEventListener('input', throttle(() => {
        console.log($inputThrottle.value);
    }, 1000));

</script>
</html>

```
