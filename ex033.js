// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.


function processarMatrizDiagonais() {

    const tamanho = 3
    const M = []
    const M_modificada = []

    let somaDiagonalSecundaria = 0
    let mediaDiagonalSecundaria = 0

    console.log("--- Matriz Original M(3,3) ---")
    for (let i = 0; i < tamanho; i++) {
        const linha = []
        for (let j = 0; j < tamanho; j++) {
            linha.push(Math.floor(Math.random() * 10) + 1)
        }
        M.push(linha)
        console.log(linha.join('\t'))
    }
    console.log('\n')

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (i + j === tamanho - 1) {
                somaDiagonalSecundaria += M[i][j]
            }
        }
    }

    mediaDiagonalSecundaria = somaDiagonalSecundaria / tamanho

    console.log(`Soma da Diagonal Secundária: ${somaDiagonalSecundaria}`)
    console.log(`Média da Diagonal Secundária: ${mediaDiagonalSecundaria.toFixed(2)}\n`)

    for (let i = 0; i < tamanho; i++) {
        const novaLinha = []
        for (let j = 0; j < tamanho; j++) {
            if (i === j) {
                const valorModificado = M[i][j] * mediaDiagonalSecundaria
                novaLinha.push(parseFloat(valorModificado.toFixed(2)))
            } else {
                novaLinha.push(M[i][j])
            }
        }
        M_modificada.push(novaLinha)
    }

    console.log("--- Matriz Modificada (Diagonal Principal Multiplicada) ---")
    for (let i = 0; i < tamanho; i++) {
        console.log(M_modificada[i].join('\t'))
    }
}

processarMatrizDiagonais()