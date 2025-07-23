// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.


const prompt = require('prompt-sync')()  // Entrada do Usuário

function calcularSalariosPorGenero() {

// Declara as variavéis

    let totalSalarioHomens = 0
    let totalSalarioMulheres = 0
    let continuar = true

    while (continuar) {
        console.log('\n--- Cadastro de Funcionário ---')

// Solicita o salário
        
let salario = Number(prompt("Digite o salário do funcionário: R$ "))
    
    while (isNaN(salario) || salario < 0) {
        console.log("Salário inválido. Por favor, digite um valor numérico positivo.")
        salario = Number(prompt("Digite o salário do funcionário: R$ "))
    }

// Solicita o sexo

    let sexo = prompt("Digite o sexo do funcionário (M para Masculino / F para Feminino): ").toUpperCase()
    while (sexo !== 'M' && sexo !== 'F') {
        console.log("Sexo inválido. Por favor, digite 'M' ou 'F'.")
        sexo = prompt("Digite o sexo do funcionário (M para Masculino / F para Feminino): ").toUpperCase()
    }

// Adiciona o salário ao total correspondente

    if (sexo === 'M') {
        totalSalarioHomens += salario
    } else { // sexo === 'F'
        totalSalarioMulheres += salario
    }

// Pergunta se o usuário quer continuar

    let respostaContinuar = prompt("Deseja cadastrar outro funcionário? (S/N): ").toUpperCase()
    while (respostaContinuar !== 'S' && respostaContinuar !== 'N') {
        console.log("Resposta inválida. Por favor, digite 'S' para sim ou 'N' para não.")
        respostaContinuar = prompt("Deseja cadastrar outro funcionário? (S/N): ").toUpperCase()
    }

    if (respostaContinuar === 'N') {
        continuar = false
    }
}

    console.log('\n--- Resumo Final ---')
    console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`)
    console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`)
}

// Inicia o aplicativo

calcularSalariosPorGenero()