// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.


const prompt = require('prompt-sync')()

function calcularPesoIdeal(altura, sexo) {
    if (sexo.toLowerCase() === 'm') {
        return (72.7 * altura) - 58
    } else if (sexo.toLowerCase() === 'f') {
        return (62.1 * altura) - 44.7
    } else {
        console.log("Sexo inválido. Use 'm' para masculino ou 'f' para feminino.")
        return null
    }
}

function main() {
    const altura = parseFloat(prompt("Digite a altura (em metros): "))
    const sexo = prompt("Digite o sexo (m/f): ")

    if (isNaN(altura) || altura <= 0) {
        console.log("Altura inválida. Por favor, digite um valor positivo.")
        return
    }

    const pesoIdeal = calcularPesoIdeal(altura, sexo)
    
    if (pesoIdeal !== null) {
        console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`)
    }
}

// Inicia o programa

main()