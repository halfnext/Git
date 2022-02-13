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

//   let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let that = this;
//       let arrow =  () => alert(that.firstName);
//       arrow();
//     }
//   };
  
//   user.sayHi(); // Ilya

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
  };

//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep(); // 1
//   ladder.down();
//   ladder.showStep(); // 0 

  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0