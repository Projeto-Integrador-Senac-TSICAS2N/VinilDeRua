const removerDoCarrinho = document.getElementById("deleteItem");
if (removerDoCarrinho) {
    removerDoCarrinho.addEventListener("click", function (event) {
        event.target.parentElement.parentElement.parentElement.remove()
    });
}

const produtosCarrinho = document.getElementById("infoPrecoF");
if (produtosCarrinho) {
    const precoProduto = produtosCarrinho.querySelector("p");
    if (precoProduto) {
        console.log(precoProduto.innerText);
    }
}