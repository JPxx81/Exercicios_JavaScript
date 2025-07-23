// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.


function contarNegativosPorLinha() {
    
    const M = [
        [1, -2, 3, -4, 5, -6, 7, -8],
        [0, 10, -20, 30, 0, -5, 1, 2],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [5, 5, 5, 5, 5, 5, 5, 5],
        [100, -1, 200, -2, 300, -3, 400, -4],
        [7, -8, 9, 0, 1, -2, 3, -4]
    ];

    const numLinhas = M.length
    const numColunas = M[0].length
    const C = []

    console.log("--- Matriz Original (M) ---")
    for (let i = 0; i < numLinhas; i++) {
        console.log(M[i].join('\t'))
    }
    console.log('\n')

    for (let i = 0; i < numLinhas; i++) {
        let contadorNegativosNaLinha = 0

        for (let j = 0; j < numColunas; j++) {
            if (M[i][j] < 0) {
                contadorNegativosNaLinha++
            }
        }
        C.push(contadorNegativosNaLinha)
    }

    console.log("--- Vetor C (Contagem de Negativos por Linha) ---")
    console.log(C)
}

contarNegativosPorLinha()