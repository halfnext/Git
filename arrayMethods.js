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

// function filterRange(arr, a, b) {
// //    return arr.map(item => { 
// //        if (item >= a && item <= b) 
// //        return item;
// //     }); 
//     return arr.filter(item => (item >= a && item <= b));
// };

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// function filterRangeInPlace(arr, a, b) {
//     for (let key of arr) {
//         if (a <= key <= b) {
//             arr.splice(arr.indexOf(key), 1);
//         };
//     };
// };

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4)

// alert( arr ); // [3, 1]

// function sortArray(arr) {
//     arr.sort((a, b) => b - a );
// };

// let arr = [5, 2, 1, -10, 8];
// sortArray(arr)
// alert( arr )

function copySorted(arr) {
    return arr.slice().sort((a, b) => a.localeCompare(b) )
};

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)