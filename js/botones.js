// Obtener el botón por su ID
const infoButton1 = document.getElementById("infoButton1");
const infoButton2 = document.getElementById("infoButton2");
// Agregar un evento de clic al botón
infoButton1.addEventListener("click", function () {
    window.open("https://drive.google.com/drive/folders/13PJcl7tJMikhpEuwoJ-pztYor_jxoPXY", "_blank");
});

infoButton2.addEventListener("click", function () {
    window.location.href = "horarios.html";
});