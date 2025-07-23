// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:

// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.


const prompt = require('prompt-sync')() // Entrada do Usuário

function calcularEstatisticas() {
    let soma = 0
    let menor = Infinity
    let contador = 0
    let pares = 0
    let continuar = true

    while (continuar) {
        const numero = Number(prompt("Digite um número: "))

        // Validação do número

        if (isNaN(numero)) {
            console.log("Por favor, digite um número válido.")
            continue
        }

        // Atualiza as estatísticas

        soma += numero
        contador++
        if (numero < menor) {
            menor = numero
        }
        if (numero % 2 === 0) {
            pares++
        }

        // Pergunta se o usuário quer continuar

        const resposta = prompt("Deseja continuar? (S/N): ").toUpperCase()
        if (resposta !== 'S') {
            continuar = false
        }
    }

    // Calcula a média

    const media = contador > 0 ? soma / contador : 0

    // Exibe os resultados

    console.log(`\nSomatório: ${soma}`)
    console.log(`Menor valor: ${menor}`)
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Quantidade de valores pares: ${pares}`)
}

// Inicia o programa

calcularEstatisticas()