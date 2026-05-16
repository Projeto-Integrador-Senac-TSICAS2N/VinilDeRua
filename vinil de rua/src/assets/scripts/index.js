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

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const title = document.getElementById("sidebar-title");
const content = document.getElementById("sidebar-content");

function openSidebar(type) {

    sidebar.classList.add("active");
    overlay.classList.add("active");

    if (type === "cart") {
        title.innerText = "Carrinho";

        content.innerHTML = `
                <p>Seu carrinho está vazio.</p>
            `;
    }

    if (type === "wishlist") {
        title.innerText = "Wishlist";

        content.innerHTML = `
                <p>Você ainda não possui favoritos.</p>
            `;
    }
}

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

