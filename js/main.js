window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Cuando el scroll pasa de 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});