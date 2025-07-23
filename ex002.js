// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.


const prompt = require('prompt-sync')()  // Entrada do Usuário

// Solicita a velocidade do carro ao usuário

let velocidade = Number(prompt("Qual a velocidade do carro Km/h?"))

// Verifica se a velocidade ultrapassa 80 Km/h

if (velocidade > 80) {

// Calcula o valor da multa

let multa = (velocidade - 80) * 5
    
// Exibe a mensagem de multa e o valor

console.log("Você foi multado!")
console.log(`O valor da multa é de R$ ${multa.toFixed(2)}.`)
} else {

// Exibe mensagem de velocidade dentro do limite

console.log("Sua velocidade está dentro do limite permitido. Tenha uma boa viagem!")
}