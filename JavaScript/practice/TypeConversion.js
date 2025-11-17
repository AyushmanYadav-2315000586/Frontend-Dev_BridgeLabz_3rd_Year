//Implicit Type Conversion
console.log(5 + "Hii");
console.log(true + 5);
console.log("5" + 5);
console.log("5" - 5);
console.log(null + 5);
console.log(undefined + 5);

console.log(5 == "5");
console.log(5 === "5");

//Explicit Type Conversion
let num = "5";
console.log(typeof num);
num = Number(num);
console.log(typeof num);
num = String(num);
console.log(typeof num);
