let boxElement = document.querySelector(".box");

boxElement.style.background = "red";

let FirstParaElement = document.querySelector(".para-one");
FirstParaElement.innerHTML = "The text of this paragraph is changed";
FirstParaElement.style.fontSize = "20px";

let alertBtnElement = document.querySelector(".btn-alert");
alertBtnElement.addEventListener("click", () => {
  alert("Button Clicked");
});
let containerElement = document.querySelector(".container");
// containerElement.innerHTML += "<p>This is a new paragraph</p>"; Not Work in many browsers now
let pEl = document.createElement("p");
pEl.textContent = "This is a paragraph";
pEl.classList.add("bg-green");
containerElement.appendChild(pEl);
