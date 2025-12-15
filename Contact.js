document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your enquiry has been submitted.');
    this.reset();
  });