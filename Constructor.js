"use strict";

function Calculator() {
    this.read = function() {
        this.a = +prompt("Enter operand a");
        this.b = +prompt("Enter operand b");
        },
        this.sum = function() {
            return this.a + this.b;
        },
        this.mul = function() {
            return this.a * this.b;
        }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );