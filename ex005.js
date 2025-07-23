// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).


const prompt = require('prompt-sync')()  // Entrada do Usuário

function jogarJoKenPo() {

  // 1. Obter a escolha do jogador

let escolhaJogador = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();

// Validar a escolha do jogador

while (escolhaJogador !== "pedra" && escolhaJogador !== "papel" && escolhaJogador !== "tesoura") {
    console.log("Escolha inválida! Por favor, digite 'Pedra', 'Papel' ou 'Tesoura'.");
    escolhaJogador = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();
}

  // 2. Gerar a escolha do computador

const opcoes = ["pedra", "papel", "tesoura"];
const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

console.log(`Você escolheu: ${escolhaJogador.charAt(0).toUpperCase() + escolhaJogador.slice(1)}`);
console.log(`O computador escolheu: ${escolhaComputador.charAt(0).toUpperCase() + escolhaComputador.slice(1)}`);

  // 3. Determinar o vencedor

if (escolhaJogador === escolhaComputador) {
    console.log("Empate!");
} else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
) {
    console.log("Você Venceu! 🎉");
} else {
    console.log("O Computador Venceu! 😢");
}
}

// Para iniciar o jogo, chame a função:

jogarJoKenPo();