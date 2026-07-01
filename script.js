// 1. Variáveis Globais (Fora das funções!)
// Isso impede o erro "is not defined"
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 3;

// 2. Elementos DOM
const campoPalpite = document.getElementById('campo-palpite');
const btnPalpite = document.getElementById('btn-palpite');
const btnReiniciar = document.getElementById('btn-reiniciar');
const mensagem = document.getElementById('mensagem-jogo');
const displayTentativas = document.getElementById('tentativas-restantes');

// 3. Lógica do Jogo
btnPalpite.addEventListener('click', function() {
    const palpite = Number(campoPalpite.value);

    // Validação
    if (!palpite || palpite < 1 || palpite > 10) {
        mensagem.textContent = "Por favor, digite um número de 1 a 10.";
        return;
    }

    tentativas--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = " Parabéns! Você venceu!";
        btnPalpite.disabled = true;
    } else if (tentativas > 0) {
        mensagem.textContent = palpite < numeroSecreto ? "Muito baixo! Tente um maior." : "Muito alto! Tente um menor.";
    } else {
        mensagem.textContent = `Game Over! O número era ${numeroSecreto}.`;
        btnPalpite.disabled = true;
    }

    displayTentativas.textContent = `Tentativas: ${tentativas}`;
    campoPalpite.value = "";
});

// 4. Resetar Jogo
btnReiniciar.addEventListener('click', function() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativas = 3;
    btnPalpite.disabled = false;
    mensagem.textContent = "Tente adivinhar o número (1 a 10):";
    displayTentativas.textContent = "Tentativas: 3";
});

// 5. Saudação Dinâmica
const saudacao = document.getElementById('saudacao');
const hora = new Date().getHours();
saudacao.textContent = hora < 12 ? "Bom dia!" : (hora < 18 ? "Boa tarde!" : "Boa noite!");

// 6. Tema
document.getElementById('btn-tema').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});