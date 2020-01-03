# 核心架构（代码）

```javascript

(function(window) {
  // jQuery 变量，用闭包避免环境污染
  var jQuery = (function() {
    var jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context, rootjQuery);
    };

    // 一些变量声明

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
          // 下章会重点讨论
        }

        // 原型方法
    };

    jQuery.fn.init.prototype = jQuery.fn;

    jQuery.extend = jQuery.fn.extend = function() {};//已介绍

    jQuery.extend({
        // 一堆静态属性和方法
        // 用 extend 绑定，而不是直接在 jQuery 上写
    });

    return jQuery;
  })();

  // 工具方法 Utilities
  // 回调函数列表 Callbacks Object
  // 异步队列 Defferred Object
  // 浏览器功能测试 Support
  // 数据缓存 Data
  // 队列 Queue
  // 属性操作 Attributes
  // 事件系统 Events
  // 选择器 Sizzle
  // DOM遍历 Traversing
  // 样式操作 CSS（计算样式、内联样式）
  // 异步请求 Ajax
  // 动画 Effects
  // 坐标 Offset、尺寸 Dimensions

  window.jQuery = window.$ = jQuery;
})(window);
```
