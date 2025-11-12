console.log("VARIABLES and DATATYPES IN JAVASCRIPT");

let a = 3.14;
console.log(a);

let c = Symbol("id");
console.log(c);

let d;
console.log(d);

let b = null;
console.log(b);

// 1. String
let name = "Hello";
console.log("String:", name);

// 2. Number
let age = 42;
let pi = 3.14;
console.log("Number:", age, pi);

// 3. Boolean
let isActive = true;
let isAdmin = false;
console.log("Boolean:", isActive, isAdmin);

// 4. Undefined
let notAssigned;
console.log("Undefined:", notAssigned);

// 5. Null
let emptyValue = null;
console.log("Null:", emptyValue);

// 6. Symbol
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1, sym2);
console.log(sym1 === sym2); // false

// 7. BigInt
let largeNumber = 123456789012345678901234567890n;
console.log("BigInt:", largeNumber);
