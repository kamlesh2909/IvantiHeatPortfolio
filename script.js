document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out!");
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');
    navToggle.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });
});
