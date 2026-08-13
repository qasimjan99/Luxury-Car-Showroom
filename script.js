
// **************Home page main carousel*****************

// All available animations
const animations = ["corner-slide", "zoom-in", "flip", "wave"];

// Target all slide images
const slides = document.querySelectorAll(".animated-slide");

// When slide is shown, apply random animation
slides.forEach(slide => {
  slide.addEventListener("load", () => {
    applyRandomAnimation(slide);
  });
});

// Bootstrap event when slide changes
const carousel = document.getElementById("carCarousel");
if (carousel) {
  carousel.addEventListener("slide.bs.carousel", (event) => {
    const nextSlideImg = event.relatedTarget.querySelector("img");

    // Remove old animations
    animations.forEach(anim => nextSlideImg.classList.remove(anim));

    // Apply new random animation
    applyRandomAnimation(nextSlideImg);
  });
}

function applyRandomAnimation(element) {
  const randomAnim = animations[Math.floor(Math.random() * animations.length)];
  element.classList.add(randomAnim);
}

// *******************************Select the contact form*****************************************


// ===================== Premium UX Enhancements =====================
document.addEventListener("DOMContentLoaded", () => {
  // Add a scrolled state to the navbar for a cleaner glass effect.
  const navbar = document.querySelector(".custom-navbar");
  const updateNavbar = () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 24);
  };
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  // Keep the contact form from unexpectedly reloading the demo page.
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (event) => {
      if (!form.action || form.action === window.location.href) {
        event.preventDefault();
        const button = form.querySelector('button[type="submit"]');
        if (button) {
          const original = button.innerHTML;
          button.innerHTML = '<i class="bi bi-check-circle me-2"></i>REQUEST RECEIVED';
          button.disabled = true;
          setTimeout(() => {
            button.innerHTML = original;
            button.disabled = false;
          }, 2200);
        }
      }
    });
  });
});




// =======****************========== CAR 1 CAROUSEL =====**************************============

let currentImage = 0;

const images = document.querySelectorAll("#CAR1 .carousel-image");
const dots = document.querySelectorAll("#CAR1 .dot");


// Show Image
function showImage(index) {

    // Agar last ke baad first image
    if (index >= images.length) {
        index = 0;
    }

    // Agar first se pehle last image
    if (index < 0) {
        index = images.length - 1;
    }

    currentImage = index;


    // Sab images hide
    images.forEach(function(image) {
        image.classList.remove("active");
    });


    // Sab dots inactive
    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    // Current image show
    images[currentImage].classList.add("active");


    // Current dot active
    dots[currentImage].classList.add("active");
}


// Next / Previous
function changeImage(direction) {

    showImage(currentImage + direction);

}


// ================= AUTOMATIC SLIDE =================

// Har 3 seconds baad image change hogi

setInterval(function() {

    changeImage(1);

}, 3000);
