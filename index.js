// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.classList.remove('show');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate Sections on Scroll
const animatedSections = document.querySelectorAll('.section-animate');
function revealOnScroll() {
  animatedSections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Form Submission with EmailJS
const contactForm = document.getElementById('contactForm');
const popupMessage = document.getElementById('popup-message');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm("service_kr86gfq", "template_onfoelq", this)
    .then(function () {
      popupMessage.style.display = "block";
      setTimeout(() => {
        popupMessage.style.display = "none";
      }, 4000);
      contactForm.reset();
    }, function (error) {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
