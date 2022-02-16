"use strict";

function descendingDigits(iNumber) {
  let string = iNumber.toString();
  // console.log(string);
  let arrNumber = string.split('');
  // console.log(arrNumber);
  arrNumber.sort((a, b) => b - a);
  return arrNumber.join('')
}

console.log(descendingDigits(42145)) // -> 54421
console.log(descendingDigits(145263)) // -> 654321
console.log(descendingDigits(123456789)) // -> 987654321