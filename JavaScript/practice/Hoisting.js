console.log(a); //ReferenceError: Cannot access 'a' before initialization

//variable function class Hoisting

//function Hoisting

add();
function add() {
  console.log(10 + 10); //Fully Hoisted
}

e(); // TypeError: e is not a function
var e = function sub() {
  console.log(10 - 10);
};

d(); // ReferenceError: Cannot access 'd' before initialization
const d = function sub() {
  console.log(10 - 10);
};

//variable hoisting
console.log(f); //ReferenceError: Cannot access 'f' before initialization same with const
let f = 5;


//class hoisting
const stu1 = new Student("Ayushman", 20); //ReferenceError
stu1.show(); //TDZ
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
