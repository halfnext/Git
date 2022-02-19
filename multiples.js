"use strict";

function mult(number) {
    if (isNaN(number) || number < 0) return 0;

    let set = new Set();
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            set.add(i);
        } 
    }
    let sum = 0;
    for (let value of set) {
        sum += value;
    }
    return sum;
}