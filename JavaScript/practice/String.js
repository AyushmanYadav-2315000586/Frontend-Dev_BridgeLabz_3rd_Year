// String
// Primitive DT, Object DT
// Immutable
let a="Hii"; // 1st way
let b='Hii'; // 2nd way
let c=`Hii`; // 3rd way (Template Literal)
let g= new String("Hii"); // 4th way (String Object)

//Concatenation
let d = a+" "+b; //(1st way)
let e = `${a} ${b}`; //(2nd way - Template Literal)
let f = a.concat(" ",b); //(3rd way - concat() method)

//Inbuilt Methods
console.log(a.length); //length
console.log(a.toUpperCase()); //toUpperCase
console.log(b.toLowerCase()); //toLowerCase
console.log(a.includes("i")); //includes
console.log(b.startsWith("H")); //startsWith
console.log(c.endsWith("i")); //endsWith
console.log(a.indexOf("i")); //indexOf
console.log(b.lastIndexOf("i")); //lastIndexOf
console.log(c.replace("Hii","Hello")); //replace
console.log(c.charAt(2)); //charAt
console.log(a.substring(0,2)); //substring
console.log(b.slice(0,2)); //slice
console.log(c.split("")); //split
console.log(g.valueOf()); //valueOf
console.log(a.trim()); //trim
