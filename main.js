// Pega o canvas e define o contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define tamanho do canvas para ocupar a tela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Função para simular carregamento
function carregarJogo() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000); // Simula 2 segundos de carregamento
    });
}

// Função para iniciar o jogo
function iniciarJogo() {
    document.getElementById("loading-screen").style.display = "none";

    // Fundo branco inicial
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Executa o carregamento e inicia
carregarJogo().then(iniciarJogo);
