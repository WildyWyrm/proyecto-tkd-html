/* Funcion de la gaeria */
document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    const numImages = 108; // Número total de imágenes

    for (let i = 1; i <= numImages; i++) {
        const link = document.createElement("a");
        link.setAttribute("data-lightbox", "images");
        link.setAttribute("rel", "lightbox");
        link.setAttribute("data-title", "Taekwon-do ITF - Team Basabe");
        link.setAttribute("href", `img/Fotos/${i}.jpg`);

        const image = document.createElement("img");
        image.setAttribute("src", `img/Fotos/${i}.jpg`);
        image.setAttribute("alt", "");
        /* image.setAttribute("style", "width: 500px;"); */
        image.setAttribute("loading", "lazy");

        link.appendChild(image);
        galleryContainer.appendChild(link);
    }
});

/* Funcion flecha de retorno */
window.addEventListener("scroll", function() {
    var arrow = document.getElementById("arrow");
    if (window.scrollY > 300) { // Cambia 300 por la posición en la que deseas mostrar la flecha
      arrow.classList.add("visible");
      arrow.classList.remove("hidden");
    } else {
      arrow.classList.add("hidden");
      arrow.classList.remove("visible");
    }
  });
  
  document.getElementById("arrow").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  

