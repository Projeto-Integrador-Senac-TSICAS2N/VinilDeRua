const botaoFiltro = document.querySelector('.filtroOff');
const campoFiltro = document.querySelector('.campoFiltro');
const rangePreco = document.getElementById('filtroPreco');
const visorValor = document.getElementById('valorFiltro');
const btnFiltrar = document.getElementById('btnFiltrarPreco');
const discos = document.querySelectorAll('.cardDisco');

// 1. Mostrar/ocultar filtro ao clicar no botão principal
botaoFiltro.addEventListener('click', () => {
    campoFiltro.style.display = 
        campoFiltro.style.display === "none" || campoFiltro.style.display === ""
        ? "block"
        : "none";
});

// 2. Atualizar visor com valor atual do range
rangePreco.addEventListener('input', () => {
    visorValor.textContent = "Até R$ " + rangePreco.value;
});

// 3. Filtrar produtos
btnFiltrar.addEventListener('click', () => {
    const precoMax = Number(rangePreco.value);

    discos.forEach(disco => {
        const preco = Number(disco.getAttribute('preco'));

        if (preco <= precoMax) {
            disco.style.display = "flex"; 
        } else {
            disco.style.display = "none";
        }
    });
});
