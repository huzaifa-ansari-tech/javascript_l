"use strict";
// console.log("Working...");

// alert(3+3); // We are using nodejs not the browser
// Code must be readable

let name = "huzaifa"; // String
let age = 17; // Number
let isLoggedIn = true; // Boolean
let stamps = 10; // Boolean

// symbol => Unique
// null => Standalone
// undefined

// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof isLoggedIn);

const num = Number(name);
// Give value NaN and the type is "number"

const ageInStr = String(age);
// console.log(ageInStr);
// Give value in str

const booleanToNum = Number(isLoggedIn);
// console.log(booleanNum);
// true => '1'
// false => '0'

const numToBoolean = Boolean(stamps);
// console.log(typeof booleanNum);
// 0 => false
// 1 => true

let str1 = "Hello ";
let str2 = "Huzaifa";

// console.log(str1 + str2);

let num1, num2, num3, num4;

num1 = num2 = num3 = num4 = 2 * 2;


// String & number conversion
// console.table(
//     [
//         "1" + 2, 
//         1 + "2", 
//         "2" + 1 + 1,
//         2 + 3 + "4"
//     ]
// );

// console.log(Number("")); // Output = 0 in Number


/* Comparison operators */

// console.log(1 > 2);
// console.log(1 == 2);
// console.log(1 >= 1);
// console.log(1 <= 2);
// console.log(1 != 1);

/*
console.table(
    [
        undefined > 0,
        undefined < 0,
        undefined <= 0,
        undefined == 0,
    ]
)

console.table(
    [
        null > 0,
        null < 0,
        null <= 0,
        null == 0,
    ]
)
*/

// console.table(
//     [
//         "2" > 1,
//         "02" > 1,
//         1 == "1",
//         1 === "1" // === The datatype is checked
//     ]
// )


/* =============================== Datatypes Summary =========================================== */

