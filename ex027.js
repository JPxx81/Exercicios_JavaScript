// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.


function multiplicarMatrizPorEscalarParaVetor() {

    const numLinhas = 6
    const numColunas = 6
    const M = []
    const V = []
    const valorA = 7

    console.log("--- Matriz Original M ---")
    for (let i = 0; i < numLinhas; i++) {
        const linha = []
        for (let j = 0; j < numColunas; j++) {
            linha.push(Math.floor(Math.random() * 10) + 1)
        }
        M.push(linha)
        console.log(linha.join('\t'))
    }
    console.log(`\n--- Valor A: ${valorA} ---`)

    let indiceV = 0
    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < numColunas; j++) {
            const resultadoMultiplicacao = M[i][j] * valorA
            V.push(resultadoMultiplicacao)
        }
    }

    console.log("\n--- Vetor V (Elementos de M multiplicados por A) ---")
    console.log(V)
}

multiplicarMatrizPorEscalarParaVetor()