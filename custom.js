// Scroll-based reveal and navbar animation
(function() {
  // Helper: Reveal elements on scroll
  function revealOnScroll() {
    var reveals = document.querySelectorAll('.card, .stat, .animated-list li, .contact-form');
    var windowHeight = window.innerHeight;
    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 60) {
        reveals[i].classList.add('in-view');
      }
    }
  }
  // Navbar scroll effect
  function navbarScroll() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  // Smooth scroll for anchor links
  function smoothScroll(e) {
    if (this.hash && document.querySelector(this.hash)) {
      e.preventDefault();
      var target = document.querySelector(this.hash);
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  }
  // Micro-interaction: focus visible polyfill
  document.body.addEventListener('keyup', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  });
  // Event listeners
  window.addEventListener('scroll', function() {
    revealOnScroll();
    navbarScroll();
  });
  window.addEventListener('resize', revealOnScroll);
  document.addEventListener('DOMContentLoaded', function() {
    revealOnScroll();
    navbarScroll();
    // Smooth scroll for nav links
    var navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', smoothScroll);
    });
  });
})();
