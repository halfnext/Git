"use strict";

function arrayCheckEven(arr) {
    for(let key of arr){
        if (isNaN(key) || key % 2 != 0) return "Not Even Array";     
    };
    return "Even Array"
};

console.log(arrayCheckEven([2, 6, 8, 10]))
console.log(arrayCheckEven([2, 6, 8, 11]))
console.log(arrayCheckEven([2, 6, 8, 'lol']))
console.log(arrayCheckEven('lol'))
