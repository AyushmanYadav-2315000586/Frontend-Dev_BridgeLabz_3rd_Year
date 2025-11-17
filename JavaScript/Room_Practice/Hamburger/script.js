const hamBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobMenu = document.querySelector(".mobile-menu-links");

hamBtn.addEventListener("click", () => {
  mobMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobMenu.classList.remove("active");
});
