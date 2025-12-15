// CHANGE NAVBAR BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// MOBILE MENU TOGGLE
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// SLIDER / CAROUSEL
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Manual next/prev buttons
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
  resetTimer();
});

// AUTO PLAY EVERY 3 SECONDS (IMPROVED)
let autoSlide = setInterval(nextSlide, 3000);

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function resetTimer() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}

// COUNTER SECTION
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count-num");
    let started = false; // To prevent re-trigger

    function startCounter() {
        counters.forEach(counter => {
            let targetText = counter.getAttribute("data-target");

            // Extract the number only
            let number = parseInt(targetText.replace(/[^0-9]/g, ""));
            let suffix = targetText.replace(/[0-9]/g, ""); // Keep + or %

            let count = 0;
            let speed = 20;

            function updateCounter() {
                if (count < number) {
                    count += Math.ceil(number / 100);
                    counter.innerText = count + suffix;
                    setTimeout(updateCounter, speed);
                } else {
                    counter.innerText = number + suffix;
                }
            }

            updateCounter();
        });
    }

    // Trigger when visible
    window.addEventListener("scroll", function () {
        const section = document.querySelector(".counter-section");
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100 && !started) {
            started = true;
            startCounter();
        }
    });
});

// BUTTON NAVIGATION
document.getElementById("viewMoreBtn").addEventListener("click", function () {
    window.location.href = "training.html";   // Change to your training page URL
});
document.getElementById("exploreCoursesBtn").addEventListener("click", function(){
    window.location.href = "training.html"; // Replace with your training page URL
});


// SUCCESS BOX ANIMATION
const boxes = document.querySelectorAll(".success-box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

boxes.forEach(box => observer.observe(box));

// Optional: Smooth scroll for second button
document.querySelector(".secondary-btn").addEventListener("click", function(e) {
    e.preventDefault();
    alert("Our team will contact you shortly for your free consultation.");
});
