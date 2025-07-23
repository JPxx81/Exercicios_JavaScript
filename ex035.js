// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.


const prompt = require('prompt-sync')()

function organizarParesEImpares() {
    const LIMITE_VETOR = 5
    const TOTAL_VALORES_LER = 30

    let vetorPares = []
    let vetorImpares = []

    console.log(`\n--- Leitura de ${TOTAL_VALORES_LER} Valores ---`)
    console.log(`(Cada vetor de pares/ímpares tem ${LIMITE_VETOR} posições e será exibido ao encher)\n`)

    for (let i = 0; i < TOTAL_VALORES_LER; i++) {
        let valor = Number(prompt(`Digite o ${i + 1}º valor: `))

        while (isNaN(valor)) {
            console.log("Entrada inválida. Por favor, digite um número.")
            valor = Number(prompt(`Digite o ${i + 1}º valor: `))
        }

        if (valor % 2 === 0) {
            vetorPares.push(valor)
            if (vetorPares.length === LIMITE_VETOR) {
                console.log(`Vetor de PARES (cheio): [${vetorPares.join(', ')}]`)
                vetorPares = []
            }
        } else {
            vetorImpares.push(valor)
            if (vetorImpares.length === LIMITE_VETOR) {
                console.log(`Vetor de ÍMPARES (cheio): [${vetorImpares.join(', ')}]`)
                vetorImpares = []
            }
        }
    }

    console.log("\n--- Leitura Concluída ---")
    if (vetorPares.length > 0) {
        console.log(`Conteúdo final do Vetor de PARES: [${vetorPares.join(', ')}]`)
    } else {
        console.log("O Vetor de PARES está vazio no final.")
    }

    if (vetorImpares.length > 0) {
        console.log(`Conteúdo final do Vetor de ÍMPARES: [${vetorImpares.join(', ')}]`)
    } else {
        console.log("O Vetor de ÍMPARES está vazio no final.")
    }
}

organizarParesEImpares()