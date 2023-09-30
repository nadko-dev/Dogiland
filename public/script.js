// This website has been designed and developed by Nadir Zulfugarli https://www.nadirdev.com

"use scrict";

// Slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let s;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (s = 0; s < slides.length; s++) {
    slides[s].style.display = "none";
  }
  for (s = 0; s < dots.length; s++) {
    dots[s].className = dots[s].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
