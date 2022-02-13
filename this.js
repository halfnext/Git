"use strict";

// let calculator = {
//     // a: 0,
//     // b: 0,
//     read: function() {
//       this.a = +prompt("Enter operand a");
//       this.b = +prompt("Enter operand b");
//     },
//     sum: function() {
//         return this.a + this.b;
//     },
//     mul: function() {
//         return this.a * this.b;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow =  () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya