// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.


const prompt = require('prompt-sync')() // Entrada do Usuário

function calcularPA() {
    const primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "))
    const razao = Number(prompt("Digite a razão da PA: "))

    // Validação dos termos

    if (isNaN(primeiroTermo) || isNaN(razao)) {
        console.log("Por favor, digite valores numéricos válidos.")
        return
    }

    let termos = []
    let soma = 0

    for (let i = 0; i < 10; i++) {
        const termoAtual = primeiroTermo + i * razao
        termos.push(termoAtual)
        soma += termoAtual
    }

    console.log(`Os 10 primeiros termos da PA são: ${termos.join(', ')}`)
    console.log(`A soma dos termos é: ${soma}`)
}

// Inicia o programa

calcularPA()