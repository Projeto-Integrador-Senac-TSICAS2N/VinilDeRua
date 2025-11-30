const range = document.getElementById('filtroPreco');
const btnFiltrar = document.getElementById('btnFiltrar');
const discos = document.querySelectorAll('.cardDisco');

btnFiltrar.addEventListener('click', () => {
    const precoEscolhido = Number(range.value);

    discos.forEach(disco => {
        const precoDisco = Number(disco.getAttribute('data-preco'));

        if (precoDisco <= precoEscolhido) {
            disco.style.display = 'block'; // mostra
        } else {
            disco.style.display = 'none'; // esconde
        }
    });
});
