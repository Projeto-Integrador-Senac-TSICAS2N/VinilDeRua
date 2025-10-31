const removerDoCarrinho = document.getElementsByClassName("deleteItem");
for (var i = 0; i < removerDoCarrinho.length; i++) {
    removerDoCarrinho[i].addEventListener("click", function (event) {
        event.target.parentElement.parentElement.remove();
        atualizarPreco();
    });
    const qntInput = document.getElementsByClassName("inputQtd");
    for (var i = 0; i < qntInput.length; i++) {
        qntInput[i].addEventListener("change", atualizarPreco);
    }
}



function addProdutoFavorito(event) {
    const a = event.target
    const infoProdutos = a.parentElement.parentElement.parentElement
    const imgProduto = infoProdutos.getElementsByClassName("imgCard")[0].src
    const tituloProduto = infoProdutos.getElementsByClassName("nomeDisco")[0].innerText
    const precoProduto = infoProdutos.getElementsByClassName("precoDisco")[0].innerText

    let novoProdutoCarrinho = document.createElement("div")
    novoProdutoCarrinho.classList.add("itemDisco")

    novoProdutoCarrinho.innerHTML =
        `
    <img src="${imgProduto}" alt="${tituloProduto}"
                class="imgCard">
                <div class="infoDisco">
                    <p class="nomeDisco">${tituloProduto}</p>
                    <p class="precoDisco">${precoProduto}</p>
                </div>
                <div class="preçoEFavDisco">
                    <button class="btnComprarAgora"
                    onclick="window.open('/src/assets/pages/teladecompra.html', '_blank')">Comprar
                    agora</button>
                    <div class="cart">
                        <button class="addCarrinho">
                            <img src="https://i.ibb.co/6RFY694G/add-shopping-cart-1.png" alt="carrinho">
                        </button>
                    </div>
                    <div class="favorite">
                        <a href="/src/assets/pages/favorito.html">
                            <img src="https://i.ibb.co/5mHR0sq/favorite-Black.png" alt="favorito">
                        </a>
                    </div>
                </div>
    `

    const divCarrinho = document.querySelector("itensCarrinho");
    divCarrinho.append(novoProdutoCarrinho)
}
