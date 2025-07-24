document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-track');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                carousel.classList.remove('paused');
            } else {
                carousel.classList.add('paused');
            }
        });
    }, {
        threshold: 0.1 // mínimo 10% visible para activarse
    });

    if (carousel) {
        observer.observe(carousel);
    }
});
