
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
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const carousel = document.getElementById("car1Carousel");

    const track = carousel.querySelector(".carousel-track");

    const slides = carousel.querySelectorAll(".carousel-slide");

    const prevBtn = document.getElementById("prevBtn");

    const nextBtn = document.getElementById("nextBtn");

    const dots = document.querySelectorAll("#carouselDots .dot");


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentIndex = 0;

    const totalSlides = slides.length;

    let autoSlide;


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        /* Loop to first image */

        if (index >= totalSlides) {

            currentIndex = 0;

        }


        /* Loop to last image */

        else if (index < 0) {

            currentIndex = totalSlides - 1;

        }


        else {

            currentIndex = index;

        }


        /* Move carousel */

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;


        /* Update dots */

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });

    }


    /* =====================================================
       NEXT
    ===================================================== */

    function nextSlide() {

        showSlide(currentIndex + 1);

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    function previousSlide() {

        showSlide(currentIndex - 1);

    }


    /* =====================================================
       START AUTOMATIC SLIDE
    ===================================================== */

    function startAutoSlide() {

        clearInterval(autoSlide);

        autoSlide = setInterval(function () {

            nextSlide();

        }, 4000);

    }


    /* =====================================================
       NEXT BUTTON
    ===================================================== */

    nextBtn.addEventListener("click", function () {

        nextSlide();

        startAutoSlide();

    });


    /* =====================================================
       PREVIOUS BUTTON
    ===================================================== */

    prevBtn.addEventListener("click", function () {

        previousSlide();

        startAutoSlide();

    });


    /* =====================================================
       DOT BUTTONS
    ===================================================== */

    dots.forEach(function (dot) {

        dot.addEventListener("click", function () {

            const slideNumber =
                parseInt(dot.getAttribute("data-slide"));

            showSlide(slideNumber);

            startAutoSlide();

        });

    });


    /* =====================================================
       PAUSE ON MOUSE ENTER
    ===================================================== */

    carousel.addEventListener("mouseenter", function () {

        clearInterval(autoSlide);

    });


    /* =====================================================
       START AGAIN ON MOUSE LEAVE
    ===================================================== */

    carousel.addEventListener("mouseleave", function () {

        startAutoSlide();

    });


    /* =====================================================
       INITIAL SLIDE
    ===================================================== */

    showSlide(0);

    startAutoSlide();

});
