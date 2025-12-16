// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
  lucide.createIcons();
  // Floating button toggle
  const floatingBtn = document.querySelector(".floating-btn");
  const mainBtn = floatingBtn.querySelector(".main-btn");
  mainBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");
  });

