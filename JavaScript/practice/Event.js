// // function clickMe() {
// //   console.log("Clicked");
// // }

// // function doubleClickMe() {
// //   console.log("Double Clicked");
// // }

// const btn = document.getElementById("myButton");
// btn.addEventListener("click", () => {
//   console.log("Double Clicked");
// });

// const btn = document.getElementById("myButton");
// btn.addEventListener("dblclick", () => {
//   console.log("Clicked");
// });
// const divContainer = document.querySelector(".container");
// const btnClrChange = document.querySelector(".btn-clr-change");
// btnClrChange.addEventListener("click", () => {
//   divContainer.classList.toggle("bg-red");
// });
 const btn = document.getElementById("myButton");
 btn.addEventListener("dblclick", () => {
   console.log("Clicked");
 });
 const divContainer = document.querySelector(".container");
 const btnRed = document.querySelector(".btn-red");
 const btnGreen = document.querySelector(".btn-green");
 const btnBlue = document.querySelector(".btn-blue");
 const btnYellow = document.querySelector(".btn-yellow");
 btnRed.addEventListener("click", () => {
   divContainer.classList.remove("bg-green", "bg-blue", "bg-yellow");
   divContainer.classList.toggle("bg-red");
 });

 btnGreen.addEventListener("click", () => {
   divContainer.classList.remove("bg-red", "bg-blue", "bg-yellow");
   divContainer.classList.toggle("bg-green");
 });

 btnBlue.addEventListener("click", () => {
   divContainer.classList.remove("bg-red", "bg-green", "bg-yellow");
   divContainer.classList.toggle("bg-blue");
 });

 btnYellow.addEventListener("click", () => {
   divContainer.classList.remove("bg-red", "bg-green", "bg-blue");
   divContainer.classList.toggle("bg-yellow");
 });