// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.


function gerarNumerosAleatorios(tamanho) {
    const numeros = []
    for (let i = 0; i < tamanho; i++) {
        const numero = Math.floor(Math.random() * 100) // Gera número aleatório entre 0 e 99
        numeros.push(numero)
    }
    return numeros
}

function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b) // Ordena em ordem crescente
}
function exibirNumeros(numeros) {
    console.log("Números gerados:")
    numeros.forEach((numero, index) => {
        console.log(`Posição ${index}: ${numero}`)
    });
}
function main() {
    const tamanho = 20 // Tamanho do vetor
    const numeros = gerarNumerosAleatorios(tamanho)
    
    exibirNumeros(numeros)
    
    const numerosOrdenados = ordenarNumeros([...numeros]) // Cria uma cópia para não alterar o original
    console.log("\nNúmeros ordenados:")
    exibirNumeros(numerosOrdenados)
}

// Inicia o programa

main()