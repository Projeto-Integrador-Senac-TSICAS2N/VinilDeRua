// Função para gerar um ID aleatório de 8 dígitos
function gerarIdAleatorio() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

document.querySelectorAll('.addCarrinho').forEach(btn => {
    btn.addEventListener('click', function(event) {
        // Sobe até o card do produto
        const card = btn.closest('.cardDisco');
        const imgProduto = card.querySelector('.imgCard').src;
        const tituloProduto = card.querySelector('.nomeDisco').innerText;
        const precoProduto = card.querySelector('.precoDisco').innerText;
        
        // Monta o objeto do produto
        const produto = {
            img: imgProduto,
            titulo: tituloProduto,
            preco: precoProduto,
            id: gerarIdAleatorio() // Garante que todo produto tem um id
        };

        // Salva no localStorage
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("Produto adicionado ao carrinho!");
    });
});