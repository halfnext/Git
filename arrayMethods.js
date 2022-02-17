"use strict";

// function camelize(str) {
//     let arr = str.split('');
//     for (let key of arr) {
//         if (key == "-") {
//             arr[(arr.indexOf(key) + 1)] = arr[(arr.indexOf(key) + 1)].toUpperCase();
//             arr.splice(arr.indexOf(key), 1);
//         }
//     }
//     return arr.join('');
// };

// function camelize(str) {
//     let arr = str.split('-');
//     let result = arr.map((item, index) => {
//         if (index != 0) {
//            return item[0].toUpperCase() + item.slice(1);
//         } else return item;
// })
//     return result.join('');
// };

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function filterRange(arr, a, b) {
//    return arr.map(item => { 
//        if (item >= a && item <= b) 
//        return item;
//     }); 
    return arr.filter(item => (item >= a && item <= b));
};

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);