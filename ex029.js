// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:

// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.

// Escrever essas somas e a matriz.


function calcularSomasMatriz() {
    const tamanho = 5
    const matriz = []

    let somaLinha4 = 0
    let somaColuna2 = 0
    let somaDiagonalPrincipal = 0
    let somaTotalMatriz = 0

    console.log("--- Matriz M (5x5) ---")
    for (let i = 0; i < tamanho; i++) {
        const linha = []
        for (let j = 0; j < tamanho; j++) {
            linha.push(Math.floor(Math.random() * 20) + 1)
        }
        matriz.push(linha)
        console.log(linha.join('\t'))
    }
    console.log('\n')

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (i === 3) {
                somaLinha4 += matriz[i][j]
            }
            if (j === 1) {
                somaColuna2 += matriz[i][j]
            }
            if (i === j) {
                somaDiagonalPrincipal += matriz[i][j]
            }
            somaTotalMatriz += matriz[i][j]
        }
    }
    console.log(`Soma da linha 4 (índice 3) de M: ${somaLinha4}`)
    console.log(`Soma da coluna 2 (índice 1) de M: ${somaColuna2}`)
    console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`)
    console.log(`Soma de todos os elementos da matriz M: ${somaTotalMatriz}`)
}

calcularSomasMatriz()