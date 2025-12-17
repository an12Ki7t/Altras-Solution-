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
function toggleMode() {
    document.body.classList.toggle("light-mode");
  }
  const counters = document.querySelectorAll(".count");
  let started = false;

  function startCounter() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 120;

      const updateCount = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }

  window.addEventListener("scroll", () => {
    const section = document.querySelector(".counter-section");
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !started) {
      startCounter();
      started = true;
    }
  });
   document.querySelectorAll(".stars").forEach(el => {
    const count = el.dataset.stars;
    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.textContent = "★";
      star.style.animationDelay = `${i * 0.12}s`;
      el.appendChild(star);
    }
  });
  // Floating button toggle
  const floatingBtn = document.querySelector(".floating-btn");
  const mainBtn = floatingBtn.querySelector(".main-btn");
  mainBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");
  });

