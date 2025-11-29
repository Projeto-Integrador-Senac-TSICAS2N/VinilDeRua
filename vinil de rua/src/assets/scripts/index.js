document.addEventListener('DOMContentLoaded', function () {
    const cardOff = document.getElementById("cardOff");
    const closeCard = document.getElementById("closeCard");
    const catalogo = document.querySelector(".catalogoIndex");

    closeCard.addEventListener("click", () => {
        // esconder oferta
        cardOff.style.display = "none";

        // centralizar catálogo
        catalogo.classList.add("centered");
    });
});

