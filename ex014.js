// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.


const prompt = require('prompt-sync')() // Entrada do Usuário

function lerNomes() {
    const nomes = []
    for (let i = 0; i < 7; i++) {
        const nome = prompt(`Digite o nome da pessoa ${i + 1}: `)
        nomes.push(nome)
    }
    return nomes;
}

function mostrarNomesInverso(nomes) {
    console.log("\nNomes na ordem inversa:")
    for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i])
    }
}

// Inicia o programa

const nomes = lerNomes()
mostrarNomesInverso(nomes)