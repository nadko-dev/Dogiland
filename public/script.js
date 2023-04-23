"use scrict";

let language = document.querySelector(".lang");

language.addEventListener("click", function () {
  if (language.getAttribute("src") === "./assets/uk.png") {
    language.setAttribute("src", "./assets/pl.png");
  } else {
    language.setAttribute("src", "./assets/uk.png");
  }
});
