const removerDoCarrinho = document.getElementsByClassName("deleteItem")
for (var i = 0; i < removerDoCarrinho.length; i++){
    removerDoCarrinho[i].addEventListener("click", function(event){
        event.target.parentElement.parentElement.remove()
    })
}

const produtosCarrinho = document.getElementsByClassName("itemCar")
for (var i = 0; i < produtosCarrinho.length; i++){
    // console.log(produtosCarrinho[i])
    const precoFinal = produtosCarrinho[i].getElementsByClassName("infoPrecoF")[0].innerText
    const quantidadeProduto = produtosCarrinho[i].getElementsByClassName("infoQuantidade")[0].innerText
    console.log(quantidadeProduto)
}