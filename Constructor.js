"use strict";

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("Enter operand a");
//         this.b = +prompt("Enter operand b");
//         },
//         this.sum = function() {
//             return this.a + this.b;
//         },
//         this.mul = function() {
//             return this.a * this.b;
//         }
// };

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Increment number")

    }
};

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values