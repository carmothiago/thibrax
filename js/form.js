// Form Handling - form.js

document.addEventListener('DOMContentLoaded', function() {
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const formResponse = document.getElementById('formResponse');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
      };
      
      // Form validation
      let isValid = true;
      let errorMessage = '';
      
      if (!formData.name.trim()) {
        isValid = false;
        errorMessage += 'Name is required. ';
      }
      
      if (!formData.email.trim()) {
        isValid = false;
        errorMessage += 'Email is required. ';
      } else if (!isValidEmail(formData.email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address. ';
      }
      
      if (!formData.message.trim()) {
        isValid = false;
        errorMessage += 'Message is required. ';
      }
      
      // Display validation errors if any
      if (!isValid) {
        showFormResponse('error', errorMessage);
        return;
      }
      
      // Simulate form submission (replace with actual form submission in production)
      simulateFormSubmission(formData);
    });
  }
  
  // Newsletter form handling
  const newsletterForm = document.getElementById('newsletterForm');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      // Simple validation
      if (!email.trim() || !isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Simulate newsletter subscription
      simulateNewsletterSubscription(email);
    });
  }
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to display form response message
  function showFormResponse(type, message) {
    if (formResponse) {
      formResponse.textContent = message;
      formResponse.className = 'form-response ' + type;
      formResponse.style.display = 'block';
      
      // Scroll to response message
      formResponse.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Hide response message after 5 seconds
      setTimeout(() => {
        formResponse.style.display = 'none';
      }, 5000);
    }
  }
  
  // Simulate form submission (for demo purposes)
  function simulateFormSubmission(formData) {
    // Show loading state
    showFormResponse('success', 'Sending your message...');
    
    // Simulate network delay
    setTimeout(() => {
      // In a real application, you would send the data to your server here
      console.log('Form submitted with data:', formData);
      
      // Show success message
      showFormResponse('success', 'Thank you for your message! We will get back to you shortly.');
      
      // Reset form
      contactForm.reset();
    }, 1500);
  }
  
  // Simulate newsletter subscription (for demo purposes)
  function simulateNewsletterSubscription(email) {
    // Show loading state
    const subscribeBtn = newsletterForm.querySelector('button');
    const originalText = subscribeBtn.textContent;
    subscribeBtn.textContent = 'Subscribing...';
    subscribeBtn.disabled = true;
    
    // Simulate network delay
    setTimeout(() => {
      // In a real application, you would send the data to your server here
      console.log('Newsletter subscription for:', email);
      
      // Show success message
      subscribeBtn.textContent = 'Subscribed!';
      
      // Reset form
      newsletterForm.reset();
      
      // Reset button after 2 seconds
      setTimeout(() => {
        subscribeBtn.textContent = originalText;
        subscribeBtn.disabled = false;
      }, 2000);
    }, 1500);
  }
  
  // Form input animation
  const formInputs = document.querySelectorAll('input, textarea, select');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
    
    // Check if input already has value on page load
    if (input.value) {
      input.parentElement.classList.add('focused');
    }
  });
});