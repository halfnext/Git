"use strict";

function getMinMax(aArray) {
    let min = 0;
    let max = 0;
    let idxMin;
    let idxMax;
    if (aArray.length == 0) return "Min/Max cannot be found";
    for (let key of aArray) {    
        if (isNaN(key)) return "Min/Max cannot be found";

        key > max ? max = key : key < min ? min = key : "Min/Max cannot be found";
    };  
    idxMin = aArray.indexOf(min);
    idxMax = aArray.indexOf(max);
    let obj = {
        [min]: idxMin,
        [max]: idxMax,
        [Symbol.toPrimitive](){
            if(obj[min] != undefined && obj[max] != undefined) {
            return (`Min: ${min} at index ${idxMin}. Max: ${max} at index ${idxMax};`) 
        }
        }
        };
    return obj;    
}

alert(getMinMax([3,4,10,7,0])); // -> Min: 0 at index 4. Max: 10 at index 2;
alert(getMinMax(["haha", 0])); // -> Min/Max cannot be found.
alert(getMinMax([])); // -> Min/Max cannot be found.
console.log(getMinMax([3,4,10,7,0])); // -> {0:4,10:2}
console.log(getMinMax(["haha", 0])); // -> {}
console.log(getMinMax([])); // -> {}