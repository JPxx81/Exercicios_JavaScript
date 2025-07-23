// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.


const prompt = require('prompt-sync')() // Entrada do Usuário

function lerRegistro() {
    const registro = {}
    registro.nome = prompt("Digite o nome do funcionário: ")
    registro.cargo = prompt("Digite o cargo do funcionário: ")
    registro.salario = Number(prompt("Digite o salário do funcionário: "))
    
    if (isNaN(registro.salario) || registro.salario < 0) {
        console.log("Por favor, digite um salário válido.")
        return null; // Retorna null se o salário for inválido
    }
    
    return registro
}

function exibirRegistro(registro) {
    if (registro) {
        console.log("\nRegistro do Funcionário:")
        console.log(`Nome: ${registro.nome}`)
        console.log(`Cargo: ${registro.cargo}`)
        console.log(`Salário: R$ ${registro.salario.toFixed(2)}`)
    } else {
        console.log("Registro inválido.")
    }
}

// Inicia o programa

const registroFuncionario = lerRegistro()
exibirRegistro(registroFuncionario)