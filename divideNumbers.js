"use strict";

const messages = {
    strA: "Dividend is not a Number",
    strB: "Divider is not a Number",
    zeroB: "Division by 0!",
    inf: "Divider/Dividend is Infinity",
    noParam: "No parameters provided",
};

function divide(a, b) {
    if (a === null || b === null) return messages.noParam;
    if (isNaN(a)) return messages.strA;
    if (isNaN(b)) return messages.strB;
    if (b === 0) return messages.zeroB;
    if (!isFinite(a) || !isFinite(b)) return messages.inf;
    return +a / +b;
}