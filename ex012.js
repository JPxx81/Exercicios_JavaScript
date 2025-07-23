// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.


function fibonacci(n) {
    let fib = [1, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
function mostrarFibonacci() {
    const n = 10; // Número de elementos da sequência
    const fib = fibonacci(n)
    console.log(`Os ${n} primeiros elementos da Sequência de Fibonacci são: ${fib.join(', ')}`)
}

// Inicia o programa

mostrarFibonacci()