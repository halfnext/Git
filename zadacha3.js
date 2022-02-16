"use strict";

function keyboard(key) {
    let keypad = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                  "a", "s", "d", "f", "g", "h", "j", "k", "l",
                  "z", "x", "c", "v", "b", "n", "m"];
    if (key.length > 1 || (keypad.indexOf(key.toLowerCase())) == -1) return "Check parametr!";
    if (key.toLowerCase() == keypad[keypad.length -1]) return (keypad[0]);
    return keypad[keypad.indexOf(key.toLowerCase()) + 1];
};

// alert(keyboard(prompt("Enter latter")));