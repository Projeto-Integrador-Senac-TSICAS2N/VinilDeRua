<?php
session_start();
require __DIR__ . '/conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Método não permitido. Use POST.';
  exit;
}

// 1) coletar e validar
$nome  = trim($_POST['nome']  ?? '');
$email = strtolower(trim($_POST['email'] ?? ''));
$senha = $_POST['senha'] ?? '';
$conf  = $_POST['confirma_senha'] ?? '';

$telefone = trim($_POST['telefone'] ?? '');
$cep      = trim($_POST['cep'] ?? '');
$endereco = trim($_POST['endereco'] ?? '');
$compl    = trim($_POST['complemento'] ?? '');
$cidade   = trim($_POST['cidade'] ?? '');
$estado   = trim($_POST['estado'] ?? '');

$erros = [];
if ($nome === '') $erros[] = 'Informe o nome.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $erros[] = 'E-mail inválido.';
if ($senha === '' || strlen($senha) < 6) $erros[] = 'Senha precisa de 6+ caracteres.';
if ($senha !== $conf) $erros[] = 'As senhas não coincidem.';

if ($erros) {
  // volta para o form com a mensagem
  header('Location: ../pages/cadastrar.php?erro=' . urlencode(implode(' | ', $erros)));
  exit;
}

// 2) checar duplicidade
$chk = $conn->prepare("SELECT 1 FROM usuarios WHERE email=?");
$chk->bind_param("s", $email);
$chk->execute(); $chk->store_result();
if ($chk->num_rows > 0) {
  $chk->close();
  header('Location: ../pages/cadastrar.php?erro=' . urlencode('E-mail já cadastrado.'));
  exit;
}
$chk->close();

// 3) inserir em transação (usuarios, enderecos, telefones)
try {
  $conn->begin_transaction();

  $hash = password_hash($senha, PASSWORD_DEFAULT);
  $hoje = date('Y-m-d');
  $nivel = 0;

  $u = $conn->prepare("INSERT INTO usuarios (nome, email, senha, data_criacao, nivel_permissao)
                       VALUES (?,?,?,?,?)");
  $u->bind_param("ssssi", $nome, $email, $hash, $hoje, $nivel);
  $u->execute();
  $usuarioId = $conn->insert_id;
  $u->close();

  $e = $conn->prepare("INSERT INTO enderecos (usuario_id, CEP, Logradouro, cidade, Estado, complemento)
                     VALUES (?,?,?,?,?,?)");
$e->bind_param("isssss", $usuarioId, $cep, $endereco, $cidade, $estado, $compl);
;
  $e->execute();
  $e->close();

  if ($telefone !== '') {
    $tipo = 'principal';
    $t = $conn->prepare("INSERT INTO telefones (usuario_id, numero_usuario, tipo)
                         VALUES (?,?,?)");
    $t->bind_param("iss", $usuarioId, $telefone, $tipo);
    $t->execute();
    $t->close();
  }

  $conn->commit();

  // 4) redirecionar para outra página (PRG)    
  $_SESSION['usuario'] = $email;
  header('Location: ../pages/perfilUsuario.html');
  exit;

} catch (Throwable $e) {
  $conn->rollback();
  header('Location: ../pages/cadastrarUser.php' . urlencode('Erro no cadastro: '.$e->getMessage()));
  exit;
}
?>