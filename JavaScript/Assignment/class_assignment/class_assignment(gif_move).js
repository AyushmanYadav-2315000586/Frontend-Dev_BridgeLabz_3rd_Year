let imageSelector = document.querySelector(".move");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  imageSelector.style.top = "0px";
  imageSelector.style.left = "0px";
});
let topPosi = 0;
let leftPosi = 0;
up.addEventListener("click", () => {
  topPosi -= 10;
  imageSelector.style.top = topPosi + "px";
  imageSelector.style.position = "relative";
});
down.addEventListener("click", () => {
  topPosi += 10;
  imageSelector.style.top = topPosi + "px";
  imageSelector.style.position = "relative";
});
left.addEventListener("click", () => {
  leftPosi -= 10;
  imageSelector.style.left = leftPosi + "px";
  imageSelector.style.position = "relative";
});
right.addEventListener("click", () => {
  leftPosi += 10;
  imageSelector.style.left = leftPosi + "px";
  imageSelector.style.position = "relative";
});
