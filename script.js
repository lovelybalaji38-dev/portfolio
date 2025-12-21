const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// Mobile Menu Toggle
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close Mobile Menu when link is clicked
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Scroll Animations
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.section-title, .about-content, .skill-card, .project-card, .contact-content');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
            // Adding a class for fade-in effect via CSS
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
            reveals[i].style.transition = "all 0.8s ease";
        } else {
            // Optional: reset animation when scrolling up
            // reveals[i].classList.remove('active');
            // reveals[i].style.opacity = "0";
            // reveals[i].style.transform = "translateY(50px)";
        }
    }
}

// Initialize reveal on load
reveal();

// Initial Setup for Fade In JS-driven (Alternative to CSS animation for scroll)
document.querySelectorAll('.section-title, .about-content, .skill-card, .project-card, .contact-content').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
});


// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        if (validateEmail(email)) {
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Smooth scrolling for anchor links (polyfill support not strictly needed for modern browsers but good practice)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




  window.addEventListener("load", () => {
        document.querySelector(".react-node").style.width = "85%";
  });

window.addEventListener("load", () => {
    document.querySelector(".bootstrap").style.width = "85%";
});

