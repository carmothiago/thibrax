// Animations - animations.js

document.addEventListener('DOMContentLoaded', function() {
  // Parallax effect for hero section
  const heroSection = document.querySelector('.hero');
  
  if (heroSection) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const parallaxElement = document.querySelector('.tech-sphere');
      
      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${scrollPosition * 0.05}px)`;
      }
    });
  }

  // Observe elements for animations when they enter viewport
  const observeElements = () => {
    const elements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .scale-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add class to start animation
          entry.target.style.visibility = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      // Initially hide elements that will be animated
      element.style.visibility = 'hidden';
      observer.observe(element);
    });
  };

  // Initialize animation observers
  observeElements();

  // Animated typing effect for section headers
  const animateTypewriter = () => {
    const elementsToAnimate = document.querySelectorAll('.typewriter');
    
    elementsToAnimate.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      element.style.visibility = 'visible';
      
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
    });
  };

  // Observe section headers for typewriter effect
  const observeTypewriter = () => {
    const elements = document.querySelectorAll('.typewriter');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateTypewriter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    elements.forEach(element => {
      // Initially hide elements
      element.style.visibility = 'hidden';
      observer.observe(element);
    });
  };

  // Services hover effects
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.service-icon i');
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.service-icon i');
      icon.style.transform = 'scale(1)';
    });
  });

  // Animate tech pattern
  const techPattern = document.querySelector('.tech-pattern');
  
  if (techPattern) {
    window.addEventListener('mousemove', function(e) {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
      
      techPattern.style.transform = `translate(${moveX}px, ${moveY}px)`;
      techPattern.style.transition = 'transform 0.5s ease-out';
    });
  }
});