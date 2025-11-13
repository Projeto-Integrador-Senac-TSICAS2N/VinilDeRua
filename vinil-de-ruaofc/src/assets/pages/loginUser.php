<?php
$ok = isset($_GET['ok']);
$erro = $_GET['erro'] ?? '';
include __DIR__ . '/../scripts/login_cadastro.php';
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- FONTES USADASS -->
    <link href="https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">
    <!-- SEPARAÇÃO -->
    <link rel="stylesheet" href="../styles/stylePerfil.css">
    <link rel="shortcut icon" type="imagex/png" href="/src/assets/images/logoVinilDeRua.svg">
</head>

<body>

    <div id="preloader">
        <img src="https://i.ibb.co/qYwvJYpw/loading.gif" alt="loading" border="0">
    </div>

    <main>
        <?php if ($erro): ?>
            <script>
                alert('<?php echo htmlspecialchars($erro); ?>');
            </script>
        <?php endif; ?>
        <?php if ($ok): ?>
            <script>
                alert('✅ Cadastro realizado com sucesso!');
            </script>
        <?php endif; ?>
        <div class="form-container">

            <!-- Tela de Login -->
            <div class="login-box form-box">
                <div class="logoPerfil">
                    <img src="https://i.ibb.co/RknvXKX2/logo-Vinil-De-Rua-preta.png" alt="Logo Vinil de Rua">
                    <h1>VINIL <br> DE RUA</h1>
                </div>
                <div class="infoUser">
                    <form method="post" action="../scripts/login_cadastro.php">
                        <input type="text" placeholder="USUÁRIO" class="inputUser" name="email-login" required>
                        <div id="input">
                            <input type="password" placeholder="SENHA" class="inputPass" name="senha-login" id="input" required>
                            <img src="https://i.ibb.co/0R4T4YRv/olhoDeR.png" alt="">
                        </div>
                </div>
                <div class="buttonLogin">
                    <button id="criarConta" onclick="window.open('cadastrarUser.php', '_self')" type="button">CRIAR CONTA</button>
                    <button id="login" type="submit">LOGIN</button>
                </div>
                </form>
                <div class=" esqueceuSenha" style="font-family:Arial, Helvetica, sans-serif ">
                    <span><a href="#" onclick="showForgot()">Esqueceu a sua senha?</a></span>
                </div>
            </div>

            <!-- Tela de Recuperar Senha -->
            <div class="forgot-box form-box">
                <div class="logoPerfil">
                    <img src="https://i.ibb.co/RknvXKX2/logo-Vinil-De-Rua-preta.png" alt="Logo Vinil de Rua">
                    <h1>VINIL <br> DE RUA</h1>
                </div>
                <div class="mensagemErro">
                    <h1 style="font-family:Arial, Helvetica, sans-serif ">Calma! Iremos recuperar sua senha.</h1>
                </div>
                <form method="post" action="">
                    <div class="infoUser">
                        <input type="email" placeholder="EMAIL" class="inputUser" name="email-troca">
                    </div>

                    <div class="buttonLogin">
                        <button id="recuperarSenha" name="acao" value="recuperar">ENVIAR</button>
                    </div>
                </form>
                <div class="esqueceuSenha">
                    <span><a href="#" onclick="showLogin()">Voltar ao login</a></span>
                </div>
            </div>

            <!-- Criar Conta
            <div class="criarConta-box form-box">
                <div class="logoPerfil">
                    <img src="https://i.ibb.co/sdGgmwtK/logo-Vd-RBlack.png" alt="Logo Vinil de Rua">
                    <h1>VINIL <br> DE RUA</h1>
                </div>

                <div class="mensagemErro">
                    <h1>Seja Bem-vindo(a) ao Vinil de Rua!</h1>
                </div>

                <div class="infoUser">
                    <form method="post" action="">
                        <input type="email" placeholder="EMAIL" class="inputUser">
                        <input type="password" placeholder="SENHA" class="inputUser">
                        <input type="password" placeholder="CONFIRME A SENHA" class="inputUser">
                        <input type="number" placeholder="TELEFONE" class="inputUser">
                        <input type="number" placeholder="CEP" class="inputUser">
                        <input type="text" placeholder="ENDEREÇO" class="inputUser">
                        <input type="text" placeholder="COMPLEMENTO" class="inputUser">
                        <input type="text" placeholder="CIDADE" class="inputUser">
                        <input type="text" placeholder="ESTADO" class="inputUser">
                    /form>
                </div>

                <div class="cadastrarUser">
                    <button id="cadastrarUser">CADASTRAR</button>
                </div>

                <div class="esqueceuSenha">
                    <span style="font-family:Arial, Helvetica, sans-serif "><a href="#" onclick="showLogin()">Voltar ao login</a></span>
                </div>
            </div> -->

    </main>


    <script src="../scripts/navbar.js" defer></script>
    <script src="../scripts/loading.js" defer></script>
    <script src="../scripts/trocaLogin.js" defer></script>
</body>

</html>