// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.


function somarColunasMatriz() {
    const numLinhas = 15
    const numColunas = 20
    const matriz = []
    const somasColunas = new Array(numColunas).fill(0)

    console.log("--- Matriz Gerada (Exemplo) ---");
    for (let i = 0; i < numLinhas; i++) {
        const linha = []
        for (let j = 0; j < numColunas; j++) {

            linha.push(parseFloat((Math.random() * 200 - 100).toFixed(2)))
        }
        matriz.push(linha)
    }

    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < numColunas; j++) {
            somasColunas[j] += matriz[i][j]
        }
    }

    console.log("\n--- Soma de Cada Coluna ---")
    for (let j = 0; j < numColunas; j++) {
        console.log(`Soma da Coluna ${j + 1}: ${somasColunas[j].toFixed(2)}`)
    }
}

somarColunasMatriz()