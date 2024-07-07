const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--left");
const btnLeft = document.querySelector(".slider__btn--right");

let max = slides.length,
  curr = 0;

// FUNCTIONS
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const prevSlide = function () {
  if (curr === max - 1) curr = 0;
  else curr++;

  goToSlide(curr);
};

const nextSlide = function () {
  if (curr === 0) curr = max - 1;
  else curr--;

  goToSlide(curr);
};

// BTN CLICKS
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
