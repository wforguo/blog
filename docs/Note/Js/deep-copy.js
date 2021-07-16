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
    name: 'www',
    info: {
        name: 'forguo',
        age: 26
    }
};

function deepCopy(obj) {
    // 舒适化返回结果，判断是否是数组
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object' || obj == null) {
        // obj是null，或者不是数组或者对象，直接返回即可
        return obj;
    }
    for (let key in obj) {
        // 遍历每个属性，递归拷贝
        if (obj.hasOwnProperty(key)) {
            // 保证key不是原型的属性
            newobj[key] = deepCopy(obj[key]);
        }
        // newobj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
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


/************************
 * @description: 注释
 ************************
 */

const deepClone = function (data) {
    if (typeof data !== "object") {
        return data;
    }
    let newObj = data.constructor === Array ? [] : {};
    for (let key in data) {
        if (typeof data[key] === 'object') {
            newObj[key] = deepClone(data[key])
        }
    }
    return  newObj;
};
