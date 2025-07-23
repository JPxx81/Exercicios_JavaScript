// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.


function multiplicarLinhasPorDiagonalPrincipal() {

    const tamanho = 50
    const M = []

    console.log("--- Matriz Original M(50,50) (Apenas as primeiras linhas/colunas para visualização) ---")
    for (let i = 0; i < tamanho; i++) {
        const linha = []
        for (let j = 0; j < tamanho; j++) {
            linha.push(parseFloat((Math.random() * 9 + 1).toFixed(2)))
        }
        M.push(linha)
        if (i < 5 && j < 5) {
        }
    }

    console.log("\n--- Processando a matriz... ---")

    for (let i = 0; i < tamanho; i++) {
        const elementoDiagonalPrincipal = M[i][i]

        for (let j = 0; j < tamanho; j++) {
            M[i][j] = parseFloat((M[i][j] * elementoDiagonalPrincipal).toFixed(4))
        }
    }

    console.log("\n--- Matriz M(50,50) Após as Multiplicações (Apenas as primeiras linhas/colunas para visualização) ---")
    for (let i = 0; i < tamanho; i++) {
        if (i < 5) {
            const linhaParaImprimir = M[i].slice(0, 5)
            console.log(linhaParaImprimir.map(n => n.toFixed(4)).join('\t') + (tamanho > 5 ? ' ...' : ''))
        } else if (i === 5) {
            console.log('...')
        }
    }
}

multiplicarLinhasPorDiagonalPrincipal()