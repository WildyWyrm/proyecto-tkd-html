document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('check'); 
    const body = document.body;

    menuHamburguesa.addEventListener('change', function() {
        if (menuHamburguesa.checked) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });

    // NUEVO: cerrar menú cuando clickean un link del menú
    const menuLinks = document.querySelectorAll('nav ul li a[href^="#"]'); // solo anclas internas

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Desmarcar checkbox para cerrar menú
            menuHamburguesa.checked = false;
            // Quitar clase que bloquea scroll
            body.classList.remove('no-scroll');
        });
    });
});
