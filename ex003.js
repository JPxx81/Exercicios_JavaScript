// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.


const prompt = require('prompt-sync')()  // Entrada do Usuário

function calcularPrecoPassagem() {  // Função principal

const distancia = parseFloat(prompt("Digite a distância que você deseja percorrer em Km:"));

// valida se o valor digitado é positivo

if (isNaN(distancia) || distancia <= 0) {
    console.log("Por favor, digite uma distância válida e positiva.");
return;
}

let precoTotal;  // Calcula o total por KM

if (distancia <= 200) {
    precoTotal = distancia * 0.50;
} else {
    precoTotal = distancia * 0.45;
}

console.log(`Para uma viagem de ${distancia.toFixed(2)} Km, o preço da passagem será de R$ ${precoTotal.toFixed(2)}.`);
}

calcularPrecoPassagem();