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
  const filterButtons = document.querySelectorAll('.filter-btn');
const programBoxes = document.querySelectorAll('.program-box');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        programBoxes.forEach(box => {
            const categories = box.dataset.category.trim().split(/\s+/); // trim and split by spaces
            if (filter === 'all' || categories.includes(filter)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});

  // REQUEST CALL BACK BUTTON ACTION
document.getElementById("requestCallback").addEventListener("click", () => {
    alert("Thank you! Our team will contact you shortly.");
});
// Floating button toggle
  const floatingBtn = document.querySelector(".floating-btn");
  const mainBtn = floatingBtn.querySelector(".main-btn");
  mainBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");
  });
