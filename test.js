"use strict";

// for (let i = 2; i<=10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// let i = 0;
// while (i < 3){
//     alert(`number ${i}!`);
//     i++;
// }

// let number;
// do {
// number = prompt("Enter a number greater than 100?", 0);
// } while (number <= 100 && number); 

// let n = 10;
// outer: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//      if (i % j ==0 ) continue outer;
//   }
//   alert(i);
// }

// let browser = prompt("Browser Name?");
// if (browser === "Edge") {
//     alert ( "You've got the Edge!" );
// } else if (browser === 'Chrome'
// || browser === 'Firefox'
// || browser === 'Safari'
// || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// let a = +prompt('a?', '');

// switch (a){
//     case 0:
//         alert( 0 );
//         break;
//     case 1:
//         alert( 1 );
//         break;
//     case 2:
//     case 3: 
//         alert( '2,3' );
//         break;
//     default:
//         alert("other");           
// }

// function checkAge(age) {
//     return (age > 18) ? true: confirm('Did parents allow you?');
//   };

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }

// function getLeast(a, b) {
//     return (a < b)? a: b;
// }

// function pow(x, n){
//     return (x ** n);
// }
// let x = +prompt("Give X");
// let n = +prompt("Give N");
// alert(pow(x, n));

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution."));

// function pow(x, n) {
//   let result = 1;

//   for(let i = 0; i < n; i++) {
//     result *=x;
//   }

//   return result;
// }

// let x = prompt("x?", ''); 
// let n = prompt("n?", '');

// if (n <= 0)
// {
//   alert(`Power ${n} is not supported, 
//     please enter an integer number greater than zero`);
// } else {
//   alert( pow(x, n) );
// }

// let age = prompt('How old are you?', 21);
// switch(age) {
//   case '21 ':
//     alert('You are young');
//   case '21':
//     alert('So young');
//   case 21:
//     alert('Soooo young');
//     break;
// }

function showEmpty() {
  let empty = 'Empty';
  return empty;
}
let showMessage = (from, text = showEmpty()) => alert(from + ': ' + text);
showMessage('Vitalik', 'Im the best worker');
showMessage('Valik');