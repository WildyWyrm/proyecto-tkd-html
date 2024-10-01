document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  const loadMoreButton = document.getElementById("loadMore");
  const numImages = 174; // Número total de imágenes
  const imagesPerLoad = 3; // Número de imágenes a cargar por clic
  let currentIndex = 1; // Índice de la imagen actual

  function loadImages() {
      const fragment = document.createDocumentFragment(); // Usar un fragmento para mejorar el rendimiento

      for (let i = currentIndex; i < currentIndex + imagesPerLoad && i <= numImages; i++) {
          const link = document.createElement("a");
          link.setAttribute("data-lightbox", "images");
          link.setAttribute("rel", "lightbox");
          link.setAttribute("data-title", "Taekwon-do ITF - Team Basabe");
          link.setAttribute("href", `img/Fotos/${i}.webp`);

          const image = document.createElement("img");
          image.src = `img/Fotos/${i}.webp`; // Cambiado de data-src a src
          image.alt = ""; 
          image.loading = "lazy"; // Mantener la carga diferida

          link.appendChild(image);
          fragment.appendChild(link);
      }

      galleryContainer.appendChild(fragment);
      currentIndex += imagesPerLoad; // Actualiza el índice actual

      // Si ya se han cargado todas las imágenes, oculta el botón "Cargar más"
      if (currentIndex > numImages) {
          loadMoreButton.style.display = 'none';
      }
  }

  // Cargar las primeras imágenes al inicio
  loadImages();

  // Configurar el evento de clic en el botón "Cargar más"
  loadMoreButton.addEventListener("click", loadImages);
});

/* Funcion flecha de retorno */
window.addEventListener("scroll", function() {
  let arrow = document.getElementById("arrow");
  if (window.scrollY > 300) { // Cambia 300 por la posición en la que deseo mostrar la flecha
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
