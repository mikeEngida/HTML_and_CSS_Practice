const slides = document.getElementsByClassName("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const carousal = document.getElementById("carousal");
let current = 0;
let show;
// Initial State
slides[current].style.display = "block";

// Functions
const slideShow = (n) => {
  slides[current].style.display = "none";
  current = (current + n + slides.length) % slides.length;
  console.log(current);
  slides[current].style.display = "block";
};
const startSlideShow = () => {
  show = setInterval(() => {
    slideShow(1);
  }, 2000);
};
const stopSlideShow = () => {
  clearInterval(show);
};

// Start
startSlideShow();

// Event Listeners
prev.addEventListener("click", () => {
  slideShow(-1);
});
next.addEventListener("click", () => {
  slideShow(1);
});
carousal.addEventListener("mouseover", stopSlideShow);
carousal.addEventListener("mouseout", startSlideShow);
