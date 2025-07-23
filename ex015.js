// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.


const prompt = require('prompt-sync')() // Entrada do Usuário

function lerNumeros() {
    const numeros = []
    for (let i = 0; i < 10; i++) {
        const numero = Number(prompt(`Digite o número ${i + 1}: `))
        if (isNaN(numero)) {
            console.log("Por favor, digite um número válido.")
            i-- // Decrementa o contador para repetir a entrada
        } else {
            numeros.push(numero)
        }
    }
    return numeros
}
function mostrarPares(numeros) {
    console.log("\nNúmeros pares e suas posições:")
    let encontrouPar = false; // Flag para verificar se encontrou algum par
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(`Número: ${numeros[i]}, Posição: ${i}`)
            encontrouPar = true; // Marca que encontrou pelo menos um par
        }
    }
    if (!encontrouPar) {
        console.log("Nenhum número par foi digitado.")
    }
}

// Inicia o programa

const numeros = lerNumeros()
mostrarPares(numeros)