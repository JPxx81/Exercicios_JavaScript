// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.


const prompt = require('prompt-sync')() // Entrada do Usuário

function calcularReducaoTempoDeVida() {  // Função principal

// Coleta a quantidade de cigarros fumados por dia

const cigarrosPorDia = prompt("Quantos cigarros você fuma por dia?")

// Coleta a quantidade de anos que a pessoa já fumou

const anosFumando = prompt("Por quantos anos você já fumou?")

// Constantes de conversão

const minPerdidosPorCigarro = 10
const minEmUmDia = 24 * 60 // 1440 minutos

// Calcula o total de cigarros fumados ao longo dos anos

const totCigarrosFumados = cigarrosPorDia * 365 * anosFumando

// Calcula o total de minutos de vida perdidos

const totMinutosPerdidos = totCigarrosFumados * minPerdidosPorCigarro

// Converte os minutos perdidos para dias

const diasDeVidaPerdidos = totMinutosPerdidos / minEmUmDia

// Exibe o resultado para o usuário

console.log(`Considerando seus hábitos, você perdeu aproximadamente ${diasDeVidaPerdidos.toFixed(2)} dias de vida.`)
}

// Chama a função para iniciar o cálculo

calcularReducaoTempoDeVida()