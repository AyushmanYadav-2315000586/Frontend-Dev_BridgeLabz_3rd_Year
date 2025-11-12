// Write a program that generated a random number between 1 to 100 and prints "Even" if the number is even and "Odd" if the number is odd.

let num= Math.random(); 
console.log("Random number between 1 to 100 is: " + num);
num=Math.trunc(num*100) + 1;
console.log("Random number between 1 to 100 is: "+num);

if(num%2==0){
    console.log("The number is Even");
}
else{
    console.log("The number is Odd");
}