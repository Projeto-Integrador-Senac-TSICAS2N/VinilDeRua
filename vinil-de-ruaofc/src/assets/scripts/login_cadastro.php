<?php
session_start();
require __DIR__ . '/conexao.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    error_log("Tentativa de login - Email: " . ($_POST['email-login'] ?? 'não fornecido'));
    $email = trim($_POST['email-login'] ?? '');
    $senha = $_POST['senha-login'] ?? '';

    // Busca o usuário pelo e-mail
    $stmt = $conn->prepare("SELECT id, email, senha FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Verifica se o usuário existe
    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();

        // Verifica se a senha está correta (comparação direta pois não está em hash)
        if ($senha === $usuario['senha']) {
            // Gera sessão com segurança
            session_regenerate_id(true);
            $_SESSION['usuario_id'] = $usuario['id'];

            /* bloco "lembrar-me" removido: login será apenas por sessão */

            // Login bem sucedido - Redireciona para o perfil
            header("Location: /VinilDeRua-main/vinil-de-ruaofc/index.html");
            exit;
        } else {
            // Senha incorreta
            header("Location: ../pages/loginUser.php?erro=" . urlencode("Senha incorreta."));
            exit;
        }
    } else {
        // Usuário não encontrado
        header("Location: ../pages/loginUser.php?erro=" . urlencode("Usuário não encontrado."));
        exit;
    }
}
?>