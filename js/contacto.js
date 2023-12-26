document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('contacto-form');

form.addEventListener('submit', function (e) {
e.preventDefault();

const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
const mensaje = document.getElementById('mensaje').value;

// Me falta validar y procesar los datos del formulario

// Mensaje de confirmación
alert(`Gracias por tu mensaje, ${nombre}!`);

// Restablecer el formulario
form.reset();
});
});
