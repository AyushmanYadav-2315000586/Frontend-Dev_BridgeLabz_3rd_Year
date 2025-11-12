console.log("CONTROL STATEMENTS IN JAVASCRIPT");

let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
switch (age) {
  case 16:
    console.log("16 years old");
    break;
  case 18:
    console.log("18 years old");
    break;
  default:
    console.log("Not 16 or 18 years old");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}

do {
  console.log("This will run at least once.");
} while (false);
