// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:

// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.


const prompt = require('prompt-sync')()

function processarVetor() {
    const tamanhoVetor = 6
    const vetor = []

    console.log(`\n--- Digite ${tamanhoVetor} números inteiros para o vetor ---`)
    for (let i = 0; i < tamanhoVetor; i++) {
        let valor = Number(prompt(`Digite o ${i + 1}º elemento: `))

        while (isNaN(valor)) {
            console.log("Entrada inválida. Por favor, digite um número inteiro.")
            valor = Number(prompt(`Digite o ${i + 1}º elemento: `))
        }
        vetor.push(valor)
    }

    console.log('\n--- Escolha uma operação ---')
    console.log('1 - Soma dos elementos')
    console.log('2 - Produto dos elementos')
    console.log('3 - Média dos elementos')
    console.log('4 - Ordenar os elementos em ordem crescente')
    console.log('5 - Mostrar o vetor')

    let operacao = Number(prompt('Digite o número da operação desejada: '))

    while (isNaN(operacao) || operacao < 1 || operacao > 5) {
        console.log('Operação inválida. Por favor, digite um número de 1 a 5.')
        operacao = Number(prompt('Digite o número da operação desejada: '))
    }

    console.log('\n--- Resultado ---')
    switch (operacao) {
        case 1:
            let soma = 0
            for (let i = 0; i < tamanhoVetor; i++) {
                soma += vetor[i]
            }
            console.log(`A soma dos elementos é: ${soma}`)
            break

        case 2:
            let produto = 1
            for (let i = 0; i < tamanhoVetor; i++) {
                produto *= vetor[i]
            }
            console.log(`O produto dos elementos é: ${produto}`)
            break

        case 3:
            let somaMedia = 0
            for (let i = 0; i < tamanhoVetor; i++) {
                somaMedia += vetor[i]
            }
            const media = somaMedia / tamanhoVetor
            console.log(`A média dos elementos é: ${media.toFixed(2)}`)
            break

        case 4:
            const vetorOrdenado = [...vetor].sort((a, b) => a - b)
            console.log(`Vetor ordenado em ordem crescente: [${vetorOrdenado.join(', ')}]`)
            break

        case 5:
            console.log(`O vetor é: [${vetor.join(', ')}]`)
            break

        default:

            console.log('Opção de operação desconhecida.')
            break
    }
}

processarVetor()