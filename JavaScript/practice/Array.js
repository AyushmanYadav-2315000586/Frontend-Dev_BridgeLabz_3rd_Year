console.log("ARRAYS IN JAVASCRIPT");

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[2]);

// Inbuilt Methods
let mapArr = arr.map((num) => num * 2);
console.log(mapArr);
console.log(arr.map((num)=> num*2));
let filterArr= arr.filter((num)=> num%2===0);
console.log(filterArr);
console.log(arr.filter((num)=> num%2===0));

//explain reduce method
let reduceArr= arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reduceArr);
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

arr.shift();
console.log(arr);
arr.unshift(0);

console.log(arr);