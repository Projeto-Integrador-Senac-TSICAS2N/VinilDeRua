// Faz o card de fiado correr da tela KKKKK
const cardFiado = document.querySelector('.cardFiado');

if (cardFiado) {
    cardFiado.addEventListener("mouseenter", () => {
        const maxX = window.innerWidth - cardFiado.offsetWidth;
        const maxY = window.innerHeight - cardFiado.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        cardFiado.style.position = "fixed"; // permite movimentar pela tela
        cardFiado.style.left = `${randomX}px`;
        cardFiado.style.top = `${randomY}px`;
    });
}
