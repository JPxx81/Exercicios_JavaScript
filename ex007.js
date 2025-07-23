// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:

// Carros populares

// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km

// Carros de luxo

// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km


const prompt = require('prompt-sync')()  // Entrada do Usuário

function alugarCarro() {

// Verifica a Escolha do Veiculo

const carro = prompt("Digite o tipo de Carro desejado? P = Popular / L = Luxo: ").toUpperCase();

let P = 'P';
let L = 'L';

// Calcula os valores para um carro Popular

if(carro === P) {
    const dias = Number(prompt("Quantos dias de aluguel? "))
    const km = Number(prompt("Quantos Km foram percorridos? "))

    let preco = 90 * dias

    if(km <= 100) {
        preco += km * 0.20
    } else {
        preco += km * 0.10
    }

    console.log(`O valor total a ser pago é: R$ ${preco.toFixed(2)}`)

// Calcula os valores para um carro de Luxo

    } else if(carro === L) {
    const dias = Number(prompt("Quantos dias de aluguel? "))
    const km = Number(prompt("Quantos Km foram percorridos? "))

    let preco = 150 * dias

    if(km <= 200) {
        preco += km * 0.30
    } else {
        preco += km * 0.25
    }

    console.log(`O valor total a ser pago é: R$ ${preco.toFixed(2)}`)
    }
}

    alugarCarro();