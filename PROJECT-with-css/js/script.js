const nav = document.getElementById("nav-container");
const navToggle = document.getElementById("navToggle");

const toggleNav = () => {
  nav.classList.toggle("nav-active");
};

// Event Listeners
navToggle.addEventListener("click", toggleNav);
// window.addEventListener("resize", () => {
//   nav.classList.remove("nav-active");
// });
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) {
    nav.classList.remove("nav-active");
  }
});
