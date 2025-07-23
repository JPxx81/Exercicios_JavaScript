// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.


const prompt = require('prompt-sync')()  // Entrada do Usuário

function verificarTriangulo() {
    const ladoA = parseFloat(prompt("Digite o comprimento do primeiro segmento de reta:"));
    const ladoB = parseFloat(prompt("Digite o comprimento do segundo segmento de reta:"));
    const ladoC = parseFloat(prompt("Digite o comprimento do terceiro segmento de reta:"));

// Validação das entradas

if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log("Por favor, digite comprimentos de segmentos válidos e positivos.");
    return;
}

// Verifica a condição para formar um triângulo

if (
    ladoA + ladoB > ladoC &&
    ladoA + ladoC > ladoB &&
    ladoB + ladoC > ladoA
) {
    console.log(`Com os segmentos de reta de ${ladoA}, ${ladoB} e ${ladoC}, É POSSÍVEL formar um triângulo!`);
} else {
    console.log(`Com os segmentos de reta de ${ladoA}, ${ladoB} e ${ladoC}, NÃO É POSSÍVEL formar um triângulo.`);
}
}

// Para executar o programa, chame a função:

verificarTriangulo();