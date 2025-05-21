// Testimonial Slider - slider.js

document.addEventListener('DOMContentLoaded', function() {
  // Testimonials slider functionality
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-testimonial');
  const nextBtn = document.querySelector('.next-testimonial');
  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the current slide and activate the corresponding dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  // Function to show the next slide
  function nextSlide() {
    if (currentSlide === slides.length - 1) {
      showSlide(0);
    } else {
      showSlide(currentSlide + 1);
    }
  }

  // Function to show the previous slide
  function prevSlide() {
    if (currentSlide === 0) {
      showSlide(slides.length - 1);
    } else {
      showSlide(currentSlide - 1);
    }
  }

  // Setup event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      resetInterval();
    });
  });

  // Setup event listeners for next and previous buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
    
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  // Auto-advance slides every 5 seconds
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Reset the interval when user interacts with slider
  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  // Initialize the slider
  showSlide(0);
  startInterval();

  // Add swipe functionality for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;
  
  const slider = document.querySelector('.testimonial-slider');
  
  if (slider) {
    slider.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slider.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - next slide
      nextSlide();
      resetInterval();
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right - previous slide
      prevSlide();
      resetInterval();
    }
  }
});