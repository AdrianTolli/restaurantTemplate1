var slides;
var dots;
var app = (function() {
  function init() {
    slides = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");
    bind();
  }

  function bind() {}

  return {
    init: init
  };
})();

document.addEventListener("DOMContentLoaded", function() {
  app.init();
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
