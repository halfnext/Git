"use strict";

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.round((styles.length - 1) / 2)] = "Classics";
// alert(styles.shift());
// styles.unshift("Rap", "Raggie");

// function sumInput() {
//     let sumArr = [];
//     let a = 0;
//     while (!isNaN(Number(a = prompt("Enter number"))) && a !== null){
//         sumArr.push(+a)
//     };

//     a = 0;

//     for (let num of sumArr) {
//         a += num;
//     };

//     return a;
// };

// alert(sumInput())

function repeatString(iAmount, sString ) {
    let newString = '';
    for (let i = 0; i < iAmount; i++) {
        newString += sString;
    };
    return newString;
}

repeatString(6, "Denis") // -> DenisDenisDenisDenisDenisDenis
repeatString(3, " # ") // ->  #  #  # 
