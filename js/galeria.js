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

