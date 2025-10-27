window.onload = function() {
    // Pegar produto selecionado do localStorage
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));
    
    if (produtoSelecionado) {
        // Atualizar imagem principal
        document.querySelector('.imgProduto > img').src = produtoSelecionado.img;
        
        // Atualizar título
        document.querySelector('.nomeProduto h1').textContent = produtoSelecionado.titulo;
        
        // Atualizar preço
        document.querySelector('.finalizarCompra p').textContent = 
            `R$ ${produtoSelecionado.preco.toFixed(2)}`;
    }
}

// Função para comprar
function comprarAgora() {
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));
    
    // Adicionar ao carrinho
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produtoSelecionado);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    
    alert('Produto adicionado ao carrinho!');
    window.location.href = '/src/assets/pages/carrinho.html';
}

// No arquivo do catálogo/cards
function selecionarProduto(produto) {
    localStorage.setItem("produtoSelecionado", JSON.stringify({
        id: produto.id,
        titulo: produto.titulo,
        img: produto.img,
        preco: produto.preco,
        // outros dados necessários...
    }));
    
    window.location.href = '/src/assets/pages/teladecompra.html';
}