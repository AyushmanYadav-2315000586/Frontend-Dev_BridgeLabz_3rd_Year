console.log("OPERATORS IN JAVASCRIPT");

let x = 10;
let y = 5;

// Arithmetic Operators
console.log(x + y);

//Relational Operators
console.log(x > y);
5 != "5";
5 !== "5";

//Logical Operators
console.log(x > 5 && y < 10);

//Assignment Operators
x += 5;
console.log(x);

//Bitwise Operators
console.log(x & y);

//ternary operator
let result = x > y ? "x is greater" : "y is greater";
console.log(result);

//unary operator
console.log(++x);

//nullish coalescing operator
let z = null;
let qw = 10;
let value = z ?? qw;
console.log(value);

//Raise to power operator
console.log(x ** 2);

//Typeof operator
console.log(typeof x);

let u = String(x);
console.log(typeof u);
