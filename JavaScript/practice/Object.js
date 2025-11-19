console.log("OBJECT IN JAVASCRIPT");

let obj = {
  name: "Ayushman",
  age: 20,
  isStudent: true,
};
console.log(obj);
console.log(typeof obj);
console.log(obj.name);
console.log(obj["age"]);

// classes

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const stu1 = new Student("Ayushman", 20);
stu1.show();

// Constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.show = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
}

const person1 = new Person("Ayushman", 20);
person1.show();

// Using create

const person2 = Object.create(null);
person2.name = "Ayushman";
person2.age = 20;
person2.show = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

//using JSON
const person3 = {
  name: "Ayushman",
  age: 20,
};
const jsonObj = JSON.parse(JSON.stringify(person3));
console.log(jsonObj);

// stringify

const jsonStr = JSON.stringify(person3);
console.log(jsonStr);
