/* Accordion */
const acc = document.getElementsByClassName("accordion");

for (const element of acc) {
    element.addEventListener("click", function () {
        /* Alternar entre agregar y eliminar la clase "activa",
           para resaltar el botón que controla el panel */
        this.classList.toggle("active");

        /* Alternar entre ocultar y mostrar el panel activo */
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
