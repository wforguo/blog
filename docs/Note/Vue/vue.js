/**
 * @Description 模拟实现一个简单的数据双向绑定
 * @Author forguo
 * @Date 2020/1/7
 */

(function () {
    'use strict';

    const Vue = function (options) {
        this.options = Object.assign({}, options);
        this.$em = document.getElementById(this.options.el);
        this.$data = this.options.data;
        this.init();
    };

    Vue.prototype.init = function () {
        let data = this.$data;
        this.observe(data);
        this.render(data.name);
        this.initEvent();
    };

    Vue.prototype.observe = function (data) {
        if (!data || typeof data !== 'object') {
            return false;
        }

        // 遍历data，将原来所有属性改成set和get的形式
        // 先获取到数据的key和value
        Object.keys(data).forEach((key) => {
            if (typeof data[key] === 'object') {
                this.observe(data[key]);
            } else {
                this.defineReactive(data, key, data[key]);
            }
        });
    };

    // 添加数据监听
    // 由于Object.defineProperty只能作用于Object，
    // 所以数组的监听，使用了伪装者模式
    Vue.prototype.defineReactive = function (target, key, value) {
        let that = this;
        // ES5语法，不支持IE8及以下版本
        Object.defineProperty(target, key, {
            enumerable: true, // 可遍历
            configurable: true, // 可删除
            get() {
                console.log('get', value);
                return value;
            },
            set(newValue) {
                console.log('set', newValue);
                value = newValue;
                // 数据改变，触发dom渲染
                that.render(newValue);
            }
        });
    };

    // event
    Vue.prototype.initEvent = function () {
        document.getElementById('set').addEventListener('click', () => {
            this.$data.name = 'Hello Vue Data!';
        });
        document.getElementById('get').addEventListener('click', () => {
            console.log(this.$data);
        });
    };

    // 渲染dom
    Vue.prototype.render = function (newValue) {
        console.log('renderDom:', newValue);
        this.$em.innerHTML = newValue;
    };

    new Vue({
        el: 'app',
        data: {
            name: 'forguo',
            grade: {
                sex: 'man'
            },
        }
    });
})();
