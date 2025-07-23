// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.


function gerarFibonacci() {

const fibonacci = [] // Cria array vazio para armazenar a sequência
const n = 15 // Define o número de elementos que queremos

// Os dois primeiros elementos da sequência são fixos

    if (n >= 1) {
        fibonacci.push(0) // Primeiro elemento
    }
    if (n >= 2) {
        fibonacci.push(1) // Segundo elemento
    }

// Preenche o restante do array usando a lógica de Fibonacci

    for (let i = 2; i < n; i++) {

// O próximo número é a soma dos dois anteriores

    const proximoNumero = fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.push(proximoNumero)
    }

console.log(`Os primeiros ${n} elementos da sequência de Fibonacci são:`)
console.log(fibonacci)
}

// Chama a função para executar o programa

gerarFibonacci()