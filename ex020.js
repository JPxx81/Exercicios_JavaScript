// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:

// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:

// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).


const prompt = require('prompt-sync')()

function lerDados() {
    const funcionarios = []
    for (let i = 0; i < 80; i++) {
        console.log(`\nFuncionário ${i + 1}:`)
        const matricula = prompt("Digite a matrícula: ")
        const nome = prompt("Digite o nome: ")
        let salarioBruto = Number(prompt("Digite o salário bruto: "))
        
        while (isNaN(salarioBruto) || salarioBruto < 0) {
            console.log("Por favor, digite um salário válido.")
            salarioBruto = Number(prompt("Digite o salário bruto: "))
        }
        
        funcionarios.push({ matricula, nome, salarioBruto })
    }
    return funcionarios
}

function calcularContracheque(funcionario) {
    const deducaoINSS = funcionario.salarioBruto * 0.12
    const salarioLiquido = funcionario.salarioBruto - deducaoINSS
    
    return {
        ...funcionario,
        deducaoINSS,
        salarioLiquido
    }
}

function exibirContracheque(contracheque) {
    console.log("\nContracheque:")
    console.log(`Matrícula: ${contracheque.matricula}`)
    console.log(`Nome: ${contracheque.nome}`)
    console.log(`Salário bruto: R$ ${contracheque.salarioBruto.toFixed(2)}`)
    console.log(`Dedução INSS: R$ ${contracheque.deducaoINSS.toFixed(2)}`)
    console.log(`Salário líquido: R$ ${contracheque.salarioLiquido.toFixed(2)}`)
}

function main() {
    const funcionarios = lerDados()
    
    funcionarios.forEach(funcionario => {
        const contracheque = calcularContracheque(funcionario)
        exibirContracheque(contracheque)
    })
}

// Inicia o programa

main()





