// 函数作为返回值
function create() {
    let a = 100;
    return function () {
        console.log(a);
    }
}

const fn = create();
const a = 0;
fn();

// 函数作为参数传递
function print(fn1) {
    let b = 400;
    fn1();
}

let b = 500;
const fn1 = function () {
    console.log(b);
};
print(fn1);

// 手写一个bind函数
Function.prototype.bind1 = function () {
    // 将参数拆除为数组
    const argus = Array.prototype.slice.call(arguments);

    // 得到要绑定的this，删除参数数组第一项，并返回
    const t = argus.shift();

    const self = this;

    return function () {
        return self.apply(t , argus);
    }
};

const bind2 = function () {
    console.log(this);
};

const bind3 = bind2.bind1({ a: 1 });
bind3();

// 闭包移仓数据，只提供api
