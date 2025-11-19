console.log("FUNCTIONS IN JAVASCRIPT");

function greet() {
  console.log("Greetings!");
}
greet();
console.log(typeof greet);

//1. Arrow Functions
const greet2 = () => console.log("Hello");
greet2();

//2. Anonymous Functions
setTimeout(function () {
  console.log("Hello", 1000);
});

//3. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Hello");
})();

//4. Higher-Order Functions
function higherOrderFunction(greetFn, name) {
  greetFn(name);
}
higherOrderFunction(greet, "Ayushman");

//5. Callback Functions : A function that is passed as an argument to another function
function greet(name) {
  console.log("Hello", name);
}

function a(fun) {
  console.log("First");
  fun();
}

function b(fun) {
  console.log("Second");
  fun();
}

function c(fun) {
  console.log("Third");
  fun();
}

function d() {
  console.log("Fourth");
}

a(function () {
  b(function () {
    c(function () {
      d();
    });
  });
});

// Prototypes: An object that is used to add properties and methods to other objects

Object.prototype.print = function () {
  console.log("Hello");
};

const obj = {};
obj.print();

console.log("Promises");

// Promises: A way to handle asynchronous operations in JavaScript

function a() {
  return new Promise((resolve) => {
    console.log("First");
    resolve();
  });
}

function b() {
  // return new Promise((resolve) => {
  console.log("Second");
  // resolve();
  // });
}

function c() {
  return new Promise((resolve) => {
    console.log("Third");
    resolve();
  });
}

a()
  .then(b)
  .then(c)
  .catch((err) => {
    console.log(err.message);
  });

// Async/Await: A way to handle asynchronous operations in JavaScript

async function run() {
  await a();
  await b();
  await c();
}

run();

// Inheritance: A way to create a new object based on an existing object

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }

  show() {
    super.show();
    console.log(`Roll No: ${this.rollNo}`);
  }
}

const stu1 = new Student("Ayushman", 20, 1);
stu1.show();

// Polymorphism: The ability and smartness of a method to behave differently when different objects are acting upon it

// Encapsulation: The process of wrapping data and methods into a single unit

// Abstraction: The process of hiding the internal details and showing only the necessary information

class Demo {
  display() {
    console.log("Hello");
  }
}

class Demo1 extends Demo {
  display() {
    console.log("Hi");
  }
}

const demo1 = new Demo1();
demo1.display();
