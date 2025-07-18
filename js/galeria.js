document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  const loadMoreButton = document.getElementById("loadMore");
  const numImages = 174; // Total de imágenes que subiste
  const imagesPerLoad = 3; // Cantidad de imágenes a cargar por clic
  let currentIndex = 1; // Empezamos en la imagen 1

  const baseURL = "https://ik.imagekit.io/m2lli2rcl/Fotos/";

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

  loadImages();

  loadMoreButton.addEventListener("click", loadImages);
});
