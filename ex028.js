// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:

// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;


function somarDiagonaisMatriz() {
    const tamanho = 10
    const matriz = []

    let somaAcimaDiagonal = 0
    let somaAbaixoDiagonal = 0

    console.log("--- Matriz Gerada (10x10) ---")
    for (let i = 0; i < tamanho; i++) {
        const linha = []
        for (let j = 0; j < tamanho; j++) {
            linha.push(Math.floor(Math.random() * 50) + 1)
        }
        matriz.push(linha)
        console.log(linha.join('\t'))
    }
    console.log('\n')

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (j > i) {
                somaAcimaDiagonal += matriz[i][j]
            }
            if (i > j) {
                somaAbaixoDiagonal += matriz[i][j]
            }
        }
    }
    console.log(`Soma dos elementos acima da diagonal principal: ${somaAcimaDiagonal}`)
    console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiagonal}`)
}

somarDiagonaisMatriz()