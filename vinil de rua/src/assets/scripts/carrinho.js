// Remover produto do carrinho
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

// Adicionar produto ao carrinho (fora do loop acima!)
const addProdutoCarrinhoButton = document.getElementsByClassName("addCarrinho");
for (var i = 0; i < addProdutoCarrinhoButton.length; i++) {
    addProdutoCarrinhoButton[i].addEventListener("click", addProdutoCarrinho);
}


function addProdutoCarrinho(event) {
    const button = event.target
    const infoProdutos = button.parentElement.parentElement.parentElement.parentElement
    const imgProduto = infoProdutos.getElementsByClassName("imgCard")[0].src
    const tituloProduto = infoProdutos.getElementsByClassName("nomeDisco")[0].innerText
    const precoProduto = infoProdutos.getElementsByClassName("precoDisco")[0].innerText

    let novoProdutoCarrinho = document.createElement("div")
    novoProdutoCarrinho.classList.add("itemCar")

    novoProdutoCarrinho.innerHTML =
        `
    <img src="${imgProduto}" alt="${tituloProduto}"
                    class="imgCar">
                <div class="infoCarrinho">
                    <div class="info">
                        <h1>Resumo</h1>
                        <p>${tituloProduto}</p>
                        <p>ID: 12345678</p>
                    </div>
                    <div class="info">
                        <h1>Quantidade</h1>
                        <div class="infoQuantidade">
                            <input type="number" value="1" min="0" class="inputQtd" required>
                        </div>
                    </div>
                    <div class="infoPreco">
                        <h1>Preço unitário</h1>
                        <p>${precoProduto}</p>
                    </div>
                    <div class="infoPrecoF">
                        <h1>Preço final</h1>
                        <p>${precoProduto}</p>
                    </div>
                </div>
                <div class="deleteItem" id="deleteItem">
                    <img src="https://i.ibb.co/Zzdfgwmf/delete.png" alt="">
                </div>
    `

    const divCarrinho = document.querySelector("itensCarrinho");
    divCarrinho.append(novoProdutoCarrinho)
}

function atualizarPreco() {
    // Calculo de quantidade para o valor final
    let precoTotal = 0;
    const produtosCarrinho = document.getElementsByClassName("itemCar");
    for (var i = 0; i < produtosCarrinho.length; i++) {
        // console.log(produtosCarrinho[i])
        const precoFinal = produtosCarrinho[i]
            .getElementsByClassName("infoPreco")[0]
            .innerText.replace("Preço unitário", "").replace("R$", "").replace(",", ".");
        // console.log(precoFinal)
        const quantidadeProduto = produtosCarrinho[i].getElementsByClassName("inputQtd")[0].value;
        // console.log(quantidadeProduto)

        precoTotal = precoTotal + (precoFinal * quantidadeProduto);

        // OU precoTotal += precoFinal*quantidadeProduto
    }
    // console.log(precoTotal)

    precoTotal = precoTotal.toFixed(2);
    precoTotal = precoTotal.replace(".", ",");
    document.getElementsByClassName("resultadoFinal")[0].innerText = "R$" + precoTotal;
}
