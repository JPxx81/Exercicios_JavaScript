// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.


const prompt = require('prompt-sync')() // Entrada do Usuário

function lerDados() {
    const nomes = []
    const idades = []
    for (let i = 0; i < 9; i++) {
        const nome = prompt(`Digite o nome da pessoa ${i + 1}: `)
        const idade = Number(prompt(`Digite a idade de ${nome}: `))
        if (isNaN(idade) || idade < 0) {
            console.log("Por favor, digite uma idade válida.")
            i-- // Decrementa o contador para repetir a entrada
        } else {
            nomes.push(nome)
            idades.push(idade)
        }
    }
    return { nomes, idades }
}

function mostrarMenoresDeIdade(nomes, idades) {
    console.log("\nPessoas menores de idade:")
    let encontrouMenor = false // Flag para verificar se encontrou algum menor de idade
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`)
            encontrouMenor = true // Marca que encontrou pelo menos um menor de idade
        }
    }
    if (!encontrouMenor) {
        console.log("Nenhuma pessoa menor de idade foi informada.")
    }
}

// Inicia o programa

const { nomes, idades } = lerDados()
mostrarMenoresDeIdade(nomes, idades)