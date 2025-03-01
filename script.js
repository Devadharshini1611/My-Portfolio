// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

// TypedJS effect
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Java Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Contact Form Submission using EmailJS
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("your_public_key"); // Initialize EmailJS with your public key

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from redirecting

        emailjs.sendForm("your_service_id", "your_template_id", this, "your_public_key")
            .then(function(response) {
                console.log("Success:", response);
                document.getElementById("form-status").innerText = "Message sent successfully!";
                document.getElementById("form-status").style.color = "green";
                
                // Reset the form after successful submission
                document.getElementById("contact-form").reset();
            })
            .catch(function(error) {
                console.error("Error:", error);
                document.getElementById("form-status").innerText = "Failed to send message. Try again.";
                document.getElementById("form-status").style.color = "red";
            });
    });
});
<button class="download-btn" onclick="downloadCV()">Download CV</button>

    function downloadCV() {
        const link = document.createElement('a');
        link.href = 'cv.pdf';
        link.download = 'Devadharshini_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

