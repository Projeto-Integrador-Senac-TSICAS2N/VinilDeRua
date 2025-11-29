<?php
require_once __DIR__ . "/../scripts/protecaoLogin.php";

if (!isset($_SESSION['usuario_id'])) {
    header("Location: perfilUsuario.php");
    exit;
}

$carrinho = $_SESSION['carrinho'] ?? [];
$total = 0;

// Calcula total do carrinho
foreach ($carrinho as $item) {
    $total += $item['preco'] * $item['qtd'];
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Pagamento - Vinil de Rua</title>
    <link rel="stylesheet" href="../styles/styleCarrinho.css">
    <style>
        .pagamentoWrapper {
            width: 100%;
            max-width: 800px;
            background: #fff;
            border: 2px solid #000;
            border-radius: 10px;
            padding: 35px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            font-family: var(--fonteTerciaria);
        }

        .opcoesPagamento {
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }

        .metodo {
            flex: 1;
            background: #eaeaea;
            border: 2px solid #000;
            border-radius: 10px;
            text-align: center;
            padding: 20px;
            cursor: pointer;
            transition: .2s;
            font-family: var(--fontePrimaria);
            font-size: 22px;
        }

        .metodo:hover {
            background: #cfcfcf;
        }

        .metodo.selected {
            background: #000;
            color: #fff;
            transform: scale(1.05);
        }

        .confirmarBtn {
            width: fit-content;
            align-self: center;
            padding: 12px 22px;
            border: 2px solid #000;
            font-family: var(--fontePrimaria);
            font-size: 24px;
            cursor: pointer;
            background: #fff;
            transition: 0.2s;
            display: none;
        }

        .confirmarBtn:hover {
            background: #000;
            color: #fff;
        }
    </style>
</head>

<body>

    <section class="fundoPrincipal">
        <h1 style="font-family: var(--fontePrimaria); font-size:38px;">Pagamento</h1>

        <div class="pagamentoWrapper">

            <h2 style="font-family:var(--fonteTerciaria);font-size:24px;text-align:center">
                Escolha a forma de pagamento
            </h2>

            <div class="opcoesPagamento">

                <div class="metodo" onclick="selectPagamento('pix', this)">
                    PIX
                </div>

                <div class="metodo" onclick="selectPagamento('cartao', this)">
                    Cartão de Crédito
                </div>

                <div class="metodo" onclick="selectPagamento('boleto', this)">
                    Boleto
                </div>

            </div>
            <div id="areaPix" style="display:none; text-align:center;">
                <h3 style="font-family: var(--fontePrimaria); margin-bottom:10px;">PIX</h3>

                <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=Vinil%20De%20Rua%20Pagamento"
                    alt="QR Code PIX"
                    style="border:3px solid #000; border-radius:10px; margin-bottom:10px;">

                <p style="background:#eee; padding:10px; border-radius:8px; font-family: var(--fonteNumeros);">
                    Chave PIX: contato@vinilderua.com.br
                </p>

                <p style="font-weight:bold; font-size:20px; margin-top:10px;">
                    Total: R$<?= number_format($total, 2, ',', '.') ?>
                </p>
            </div>

            <form id="formPagamento" method="POST">
                <input type="hidden" id="pagamentoSelecionado" name="pagamento">
            </form>


            <button class="confirmarBtn" onclick="confirmarPagamento()">
                Confirmar Pagamento
            </button>


        </div>
    </section>
    <script>
    function confirmarPagamento() {
        const metodo = document.getElementById("pagamentoSelecionado").value;

        if (!metodo) return;

        // Requisição assíncrona para limpar o carrinho
        fetch("../scripts/limparCarrinho.php", { method: "POST" })
        .then(() => {
            if (metodo === "boleto") {
                window.location.href = "boletoSimu.php";
            } else {
                window.location.href = "resumoCompra.php";
            }
        })
        .catch(err => console.error("Erro ao limpar carrinho:", err));
    }
</script>


    <script>
        function selectPagamento(tipo, el) {
            document.querySelectorAll('.metodo').forEach(m => m.classList.remove('selected'));
            el.classList.add('selected');

            document.getElementById("pagamentoSelecionado").value = tipo;

            document.querySelector('.confirmarBtn').style.display = "block";

            document.getElementById('areaPix').style.display = (tipo === 'pix') ? 'block' : 'none';
        }
    </script>


</body>

</html>