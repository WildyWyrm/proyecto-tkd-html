document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('check'); 
    const body = document.body;

    menuHamburguesa.addEventListener('change', function() {
        if (menuHamburguesa.checked) {
            // Desactivar el scroll
            body.classList.add('no-scroll');
        } else {
            // Activar el scroll
            body.classList.remove('no-scroll');
        }
    });
});
