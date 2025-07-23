// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.


const prompt = require('prompt-sync')()

function coletarDados() {
    const dados = []
    let continuar = true

    while (continuar) {
        const salario = parseFloat(prompt("Digite o salário (ou -1 para sair): "))
        if (salario === -1) {
            continuar = false
            break
        }
        
        const filhos = parseInt(prompt("Digite o número de filhos: "))
        
        if (isNaN(salario) || isNaN(filhos) || salario < 0 || filhos < 0) {
            console.log("Dados inválidos. Por favor, tente novamente.")
            continue
        }
        
        dados.push({ salario, filhos })
    }
    
    return dados
}

function calcularEstatisticas(dados) {
    if (dados.length === 0) {
        console.log("Nenhum dado foi coletado.")
        return
    }

    let totalSalario = 0
    let totalFilhos = 0
    let maiorSalario = dados[0].salario
    let pessoasBaixoSalario = 0

    dados.forEach(pessoa => {
        totalSalario += pessoa.salario
        totalFilhos += pessoa.filhos
        if (pessoa.salario > maiorSalario) {
            maiorSalario = pessoa.salario
        }
        if (pessoa.salario <= 350) {
            pessoasBaixoSalario++
        }
    })

    const mediaSalario = totalSalario / dados.length
    const mediaFilhos = totalFilhos / dados.length
    const percentualBaixoSalario = (pessoasBaixoSalario / dados.length) * 100

    console.log(`Média de salário: R$ ${mediaSalario.toFixed(2)}`)
    console.log(`Média de filhos: ${mediaFilhos.toFixed(2)}`)
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`)
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualBaixoSalario.toFixed(2)}%`)
}

function main() {
    const dados = coletarDados()
    calcularEstatisticas(dados)
}

// Inicia o programa

main()