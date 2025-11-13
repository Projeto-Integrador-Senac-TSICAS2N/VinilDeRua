<?php
session_start();
include('conexao.php');

$nome          = ($_POST['nome'] ?? '');
$email          = trim($_POST['email'] ?? '');
$senha          = $_POST['senha'] ?? '';
$confirma       = $_POST['confirma_senha'] ?? '';

$telefone       = trim($_POST['telefone'] ?? '');
$cep            = trim($_POST['cep'] ?? '');
$endereco       = trim($_POST['endereco'] ?? '');
$complemento    = trim($_POST['complemento'] ?? '');
$cidade         = trim($_POST['cidade'] ?? '');
$estado         = trim($_POST['estado'] ?? '');

if ($email === '' || $senha === '' || $confirma === '') {
  echo "<script>alert('Preencha email e as duas senhas.'); history.back();</script>";
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "<script>alert('E-mail inválido.'); history.back();</script>";
  exit;
}
if ($senha !== $confirma) {
  echo "<script>alert('As senhas não coincidem.'); history.back();</script>";
  exit;
}
if (strlen($senha) < 6) {
  echo "<script>alert('A senha deve ter pelo menos 6 caracteres.'); history.back();</script>";
  exit;
}

$check = $conn->prepare("SELECT 1 FROM usuarios WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
  $check->close();
  echo "<script>alert('E-mail já cadastrado.'); history.back();</script>";
  exit;
}
$check->close();

$hash = password_hash($senha, PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (email, senha, telefone, cep, endereco, complemento, cidade, estado)   
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssss", $email, $hash, $telefone, $cep, $endereco, $complemento, $cidade, $estado);
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar</title> <!-- FONTES USADASS -->
    <link href="https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet"> <!-- SEPARAÇÃO -->
    <link rel="stylesheet" href="../styles/stylePerfil.css">
    <link rel="shortcut icon" type="imagex/png" href="../images/logoVinilDeRua.svg">
</head>

<body>
    <div id="preloader"> <img src="https://i.ibb.co/qYwvJYpw/loading.gif" alt="loading" border="0"> </div>
    <main>
        <div class="form-container">
            <div class="criarConta-box form-box">
                <div class="logoPerfil"> <img src="https://i.ibb.co/RknvXKX2/logo-Vinil-De-Rua-preta.png" alt="Logo Vinil de Rua">
                    <h1>VINIL <br> DE RUA</h1>
                </div>
                <div class="mensagemErro">
                    <h1>Seja Bem-vindo(a) ao Vinil de Rua!</h1>
                </div>
                <form action="">
                    <div class="infoUser"> 
                        <input type="text" placeholder="NOME COMPLETO" class="inputGps." id="estadoInput" required  name="nome">
                        <input type="email" placeholder="EMAIL" class="inputEmail" required name="email"> 
                        <input type="password" placeholder="SENHA" class="inputSenha" name="senha" required> 
                        <input type="password" placeholder="CONFIRME A SENHA" class="inputSenha" name="confirma_senha" required> 
                        <input type="number" placeholder="TELEFONE" class="inputTelefone" name="telefone" required> 
                        <input type="number" placeholder="CEP" class="inputGps" name="cep" required> 
                        <input type="text" placeholder="ENDEREÇO" class="inputGps." name="endereco" required> 
                        <input type="text" placeholder="COMPLEMENTO" class="inputGps." required name="complemento"> 
                        <input type="text" placeholder="CIDADE" class="inputGps." required name="cidade"> 
                        <input type="text" placeholder="ESTADO" class="inputGps." id="estadoInput" required  name="estado">
                    </div> 
                </form>
                <div class="cadastrarUser"> <button id="cadastrarUser" onclick="window.open('/VinilDeRua-main/vinil-de-ruaofc/index.html', '_self')">CADASTRAR</button> </div>
                <div class="voltarLogin"> <span><a href="#" onclick="window.open('/src/assets/pages/perfilUsuario.html', '_self')">Voltar ao login</a></span> </div>
            </div>
    </main>
    <script src="../scripts/navbar.js"></script>
    <script src="../scripts/loading.js"></script>
    <script src="../scripts/trocaLogin.js"></script>
</body>

</html>