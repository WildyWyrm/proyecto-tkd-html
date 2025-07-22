document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  const loadMoreButton = document.getElementById("loadMore");
  const arrow = document.getElementById("arrow");

  const numImages = 174;
  const imagesPerLoad = 10;
  let currentIndex = 1;

  const baseURL = "https://ik.imagekit.io/m2lli2rcl/Fotos/";

  function loadImages() {
    const fragment = document.createDocumentFragment();

    for (let i = currentIndex; i < currentIndex + imagesPerLoad && i <= numImages; i++) {
      const link = document.createElement("a");
      link.setAttribute("data-lightbox", "images");
      link.setAttribute("data-title", `Taekwon-do ITF - Imagen ${i}`);
      link.setAttribute("href", `${baseURL}${i}.webp`);

      const image = document.createElement("img");
      image.setAttribute("data-src", `${baseURL}${i}.webp?tr=w-800`);
      image.setAttribute("alt", `Imagen Taekwon-do ITF número ${i}`);
      image.classList.add("lazy-image");

      link.appendChild(image);
      fragment.appendChild(link);
    }

    galleryContainer.appendChild(fragment);
    currentIndex += imagesPerLoad;

    if (currentIndex > numImages) {
      loadMoreButton.style.display = "none";
    }

    lazyLoad(); 
  }

  function lazyLoad() {
    const images = document.querySelectorAll(".lazy-image");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;

          img.addEventListener('load', () => {
            img.classList.add('lazy-image-loaded');
          });

          img.classList.remove("lazy-image");
          obs.unobserve(img);
        }
      });
    });

    images.forEach(img => observer.observe(img));
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      arrow.classList.remove("hidden");
      arrow.classList.add("visible");
    } else {
      arrow.classList.remove("visible");
      arrow.classList.add("hidden");
    }
  });

  arrow.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  loadImages();
  loadMoreButton.addEventListener("click", loadImages);
});
