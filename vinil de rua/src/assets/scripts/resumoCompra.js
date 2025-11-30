// Selecionar método
const payMethods = document.querySelectorAll('input[name="payMethod"]');
let selectedMethod = null;
let pagamentoBloqueado = false;

payMethods.forEach(method => {
    method.addEventListener("change", () => {
        if (pagamentoBloqueado) return; // Impede mudança após confirmar

        payMethods.forEach(m => m.checked = false);
        method.checked = true;
        selectedMethod = method.dataset.method;
    });
});

// Botão "Realizar Pagamento"
function realizarPagamento() {
    if (!selectedMethod) {
        alert("Selecione uma forma de pagamento antes.");
        return;
    }

    mostrarAreaPagamento(selectedMethod);

    pagamentoBloqueado = true;
    bloquearOpcoesPagamento();
}

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

function bloquearOpcoesPagamento() {
    payMethods.forEach(method => {
        method.disabled = true;
    });
}
