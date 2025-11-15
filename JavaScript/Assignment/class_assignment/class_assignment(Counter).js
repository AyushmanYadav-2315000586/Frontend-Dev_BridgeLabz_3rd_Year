let counterDisplay = document.querySelector(".counter");
let incBtn = document.querySelector(".inc");
let inc2Btn = document.querySelector(".inc-2");
let decBtn = document.querySelector(".dec");
let count = 0;
updateDisplay();
function updateDisplay() {
  counterDisplay.textContent = count;
}
inc2Btn.addEventListener("click", () => {
  count += 2;
  updateDisplay();
});
incBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});
decBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});
