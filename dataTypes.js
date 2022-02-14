"use strict";

// let a = +prompt("The first number?");
// let b = +prompt("The second number?");
// alert(a + b);

// function random(min, max) {
//     alert((max - min) * Math.random() + min);
// };
// random(2, 8);

function randomInteger(min, max) {
    alert(Math.floor((max + 1 - min) * Math.random() + min));
};
randomInteger(2, 8);