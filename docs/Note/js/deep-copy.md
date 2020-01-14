# 实现一个引用类型的深拷贝

> 深拷贝

[js](deep-copy.js)

```javascript
/**
 * @Description 实现一个引用类型的深拷贝
 * @Author forguo
 * @Date 2020/1/14
 */
// let array = [
//     {number: 1},
//     {number: 2},
//     {number: 3}
// ];

let array = {
    number: 1,
    name: 'www'
};

function deepCopy(obj) {
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    }
    for (let i in obj) {
        console.log(obj[i]);
        newobj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
    }
    return newobj
}

Object.keys(array).map((item) => {
    console.log(item);
});
let copyArray = deepCopy(array);
copyArray.number = 100;
console.log(array); // [{number: 1}, { number: 2 }, { number: 3 }]
console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]

```
