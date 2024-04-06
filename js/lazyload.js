/* 
const imagenes = document.querySelectorAll('.lazyload'); // Seleccionamos todas las imágenes con la clase "lazyload"

const observador = new IntersectionObserver(entradas => { // Creamos un observador de intersecciones
        entradas.forEach(entrada => { // Recorremos cada entrada (imagen)
                if (entrada.isIntersecting) { // Si la imagen está entrando en el viewport
                        const imagen = entrada.target; // Obtenemos la imagen
                        imagen.src = imagen.dataset.src; // Cambiamos el atributo "src" por la URL real de la imagen
                        imagen.classList.remove('lazyload'); // Eliminamos la clase "lazyload" de la imagen cargada
                        observador.unobserve(imagen); // Dejamos de observar la imagen ya cargada
                }
        });
});

imagenes.forEach(imagen => { // Recorremos todas las imágenes
        imagen.dataset.src = imagen.getAttribute('href'); // Guardamos la URL real de la imagen en el atributo "data-src"
        observador.observe(imagen); // Comenzamos a observar la imagen
});
 */

