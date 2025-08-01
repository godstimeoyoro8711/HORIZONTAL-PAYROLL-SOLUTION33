// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const applicationForm = document.getElementById('application-form');
const formSuccess = document.getElementById('form-success');

if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        applicationForm.style.display = 'none';
        formSuccess.classList.remove('hidden');
        window.scrollTo({
            top: formSuccess.offsetTop - 100,
            behavior: 'smooth'
        });
    });
}
