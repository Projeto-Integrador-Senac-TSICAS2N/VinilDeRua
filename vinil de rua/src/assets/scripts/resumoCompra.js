// Selecionar método
const payMethods = document.querySelectorAll('input[name="payMethod"]');
let selectedMethod = null;
let pagamentoBloqueado = false;

payMethods.forEach(method => {
    method.addEventListener("change", () => {
        if (pagamentoBloqueado) return; // bloqueia mudança depois

        payMethods.forEach(m => m.checked = false);
        method.checked = true;

        selectedMethod = method.dataset.method;

        // 👉 Agora mostra a área imediatamente ao clicar
        mostrarAreaPagamento(selectedMethod);
    });
});

// Mostrar área ao clicar na opção
function mostrarAreaPagamento(method) {
    const areaPix = document.getElementById("areaPix");
    const areaCartao = document.getElementById("areaCartao");
    const areaBoleto = document.getElementById("areaBoleto");

    if (areaPix) areaPix.style.display = "none";
    if (areaCartao) areaCartao.style.display = "none";
    if (areaBoleto) areaBoleto.style.display = "none";

    if (method === "pix" && areaPix) areaPix.style.display = "block";
    if (method === "cartao" && areaCartao) areaCartao.style.display = "block";
    if (method === "boleto" && areaBoleto) areaBoleto.style.display = "block";
}

// Botão "Realizar Pagamento"
function realizarPagamento() {
    if (!selectedMethod) {
        alert("Selecione uma forma de pagamento antes.");
        return;
    }

    // 🔒 Depois de clicar, bloquear opções
    pagamentoBloqueado = true;
    bloquearOpcoesPagamento();

    // 👉 Executa o pagamento REAL
    fetch("../scripts/limparCarrinho.php", { method: "POST" })
        .then(() => {
            if (selectedMethod === "boleto") {
                window.location.href = "boletoSimu.php";
            } else {
                window.location.href = "resumoCompra.php";
            }
        })
        .catch(err => console.error("Erro ao limpar carrinho:", err));
}

// Travar seleção após clicar no botão
function bloquearOpcoesPagamento() {
    payMethods.forEach(method => {
        method.disabled = true;
    });
}
