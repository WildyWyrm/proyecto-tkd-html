document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  const loadMoreButton = document.getElementById("loadMore");
  const arrow = document.getElementById("arrow");

  const numImages = 174; // Total de imágenes
  const imagesPerLoad = 3; // Cantidad de imágenes a cargar por clic
  let currentIndex = 1; // Empezamos en la imagen 1

  const baseURL = "https://ik.imagekit.io/m2lli2rcl/Fotos/";

  // Función para cargar imágenes a la galería
  function loadImages() {
    const fragment = document.createDocumentFragment();

    for (let i = currentIndex; i < currentIndex + imagesPerLoad && i <= numImages; i++) {
      const link = document.createElement("a");
      link.setAttribute("data-lightbox", "images");
      link.setAttribute("rel", "lightbox");
      link.setAttribute("data-title", "Taekwon-do ITF - Team Basabe");
      link.setAttribute("href", `${baseURL}${i}.webp`);

      const image = document.createElement("img");
      image.src = `${baseURL}${i}.webp`;
      image.alt = `Imagen Taekwon-do ITF número ${i}`;
      image.loading = "lazy";

      link.appendChild(image);
      fragment.appendChild(link);
    }

    galleryContainer.appendChild(fragment);
    currentIndex += imagesPerLoad;

    if (currentIndex > numImages) {
      loadMoreButton.style.display = 'none';
    }
  }

  // Mostrar/ocultar flecha al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      arrow.classList.remove("hidden");
      arrow.classList.add("visible");
    } else {
      arrow.classList.remove("visible");
      arrow.classList.add("hidden");
    }
  });

  // Acción al hacer click en la flecha: subir arriba suavemente
  arrow.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Carga inicial de imágenes
  loadImages();

  // Evento para cargar más imágenes con el botón
  loadMoreButton.addEventListener("click", loadImages);
});
