
// Remover produto do carrinho
const removerDoCarrinho = document.getElementsByClassName("deleteItem")
for (var i = 0; i < removerDoCarrinho.length; i++){
    removerDoCarrinho[i].addEventListener("click", function(event){
        event.target.parentElement.parentElement.remove()
        atualizarPreco()
    })
}


function atualizarPreco(){
    // Calculo de quantidade para o valor final
    let precoTotal = 0
    const produtosCarrinho = document.getElementsByClassName("itemCar")
    for (var i = 0; i < produtosCarrinho.length; i++){
        // console.log(produtosCarrinho[i])
        const precoFinal = produtosCarrinho[i].getElementsByClassName("infoPrecoF")[0].innerText.replace("Preço final", "").replace("R$", "").replace(",", ".")
        // console.log(precoFinal)
        const quantidadeProduto = produtosCarrinho[i].getElementsByClassName("inputQtd")[0].value
        // console.log(quantidadeProduto)
    
        precoTotal = precoTotal + (precoFinal*quantidadeProduto)
    
        // OU precoTotal += precoFinal*quantidadeProduto
    }
    // console.log(precoTotal)
    
    precoTotal = precoTotal.toFixed(2)
    precoTotal = precoTotal.replace(".", ",")
    document.getElementsByClassName("resultadoFinal")[0].innerText = "R$" + precoTotal;

}