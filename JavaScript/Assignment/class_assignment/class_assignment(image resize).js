let image = document.querySelector(".resize");
let incHeightBtn = document.querySelector(".inc-height");
let incWidthBtn = document.querySelector(".inc-width");
let currHeight = image.height;
let currWidth = image.width;
incHeightBtn.addEventListener("click", () => {
  currHeight += 10;
  image.style.height = currHeight + "px";
});
incWidthBtn.addEventListener("click", () => {
  currWidth += 10;
  image.style.width = currWidth + "px";
});
