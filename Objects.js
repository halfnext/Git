"use strict";

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty (object) {
//     for (let key in object) {
//       alert(!key ?  "true" : "false");
//       return;
//     }
// };

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// let sum = 0 

// for (let key in salaries) {
//    sum += salaries[key]; 
//    console.log(salaries.key);
// }
// console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu)

function multiplyNumeric(obj) {
  for (let key in obj){
    if (Number(obj[key])) {
     obj[key] *= 2 
     } else continue;
  }
}

console.log(menu);