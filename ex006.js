// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.


const prompt = require('prompt-sync')()  // Entrada do Usuário

function jogarAdivinhacao() {

const numeroSorteado = Math.floor(Math.random() * 5) + 1;

let tentativa;
let acertou = false;

console.log("Tente adivinhar o número que o computador sorteou entre 1 e 5!");

// Loop para múltiplas tentativas

while (!acertou) {
    tentativa = parseInt(prompt("Qual é o seu palpite? (Digite um número entre 1 e 5)"));

// Validação da entrada do jogador

if (isNaN(tentativa) || tentativa < 1 || tentativa > 5) {
console.log("Palpite inválido! Por favor, digite um número entre 1 e 5.");
    } else if (tentativa === numeroSorteado) {
console.log(`Parabéns! Você acertou! O número sorteado era ${numeroSorteado}. 🎉`);
    acertou = true;
    } else if (tentativa < numeroSorteado) {
console.log("Tente um número maior...");
    } else {
console.log("Tente um número menor...");
    }
}
}

// Para iniciar o jogo, chame a função:

jogarAdivinhacao();