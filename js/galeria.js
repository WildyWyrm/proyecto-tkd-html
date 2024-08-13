document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  const numImages = 174; // Número total de imágenes

  // Crea enlaces y elementos img, pero no establecer src inmediatamente
  for (let i = 1; i <= numImages; i++) {
      const link = document.createElement("a");
      link.setAttribute("data-lightbox", "images");
      link.setAttribute("rel", "lightbox");
      link.setAttribute("data-title", "Taekwon-do ITF - Team Basabe");
      link.setAttribute("href", `img/Fotos/${i}.webp`);

      const image = document.createElement("img");
      image.setAttribute("data-src", `img/Fotos/${i}.webp`);
      image.setAttribute("alt", "");
      image.setAttribute("loading", "lazy");

      link.appendChild(image);
      galleryContainer.appendChild(link);
  }

  // Configurar el IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src; // Establece el src desde data-src
              observer.unobserve(img); // Dejar de observar la imagen una vez cargada
          }
      });
    }, { threshold: 0.5 }); // Umbral de visibilidad ajustado al 50%

  // Observar todas las imágenes
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      observer.observe(img);
  });
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
