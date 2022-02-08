'use strict';

// let admin;
// let name = "John"
// admin = name;
// alert( admin );
// console.log(admin);

// let planet = "Earth";
// let currentUser;

// let name = prompt("What is the “official” name of JavaScript?", 'ECMAScript');
// if (name == 'ECMAScript') {
//     alert( "Right!" );
// }   else {
//     alert( "wrong" );
// }

// let number = prompt("Give a number");
//  (number > 0) ? alert( "1" ): (number < 0) ? alert( "-1" ): alert("0");
//  let calc = +"99" * "9 0";
// alert(calc);

// let age = 15;
// if ( age >= 14 && age <= 90 ) {
//     alert("little boy")
// }

let pass
let logon = prompt("Login");
(logon == "Admin") ? ((pass = prompt("password")) && pass == 'TheMaster') ? alert('Welcome!') : (pass === null || pass === '') ? alert("canseled") : alert('Wrong password') : (logon === null || logon ==='')? alert("canceled"): alert("I don't know you");