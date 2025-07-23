// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].


function calcularProdutoElementoAElemento() {

    const numLinhas = 3
    const numColunas = 5

    const A = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
    ]

    const B = [
        [5, 4, 3, 2, 1],
        [10, 9, 8, 7, 6],
        [15, 14, 13, 12, 11]
    ]

    const P = []

    console.log("--- Matriz A ---")
    for (let i = 0; i < numLinhas; i++) {
        console.log(A[i].join('\t'))
    }
    console.log("\n--- Matriz B ---")
    for (let i = 0; i < numLinhas; i++) {
        console.log(B[i].join('\t'))
    }

    for (let i = 0; i < numLinhas; i++) {
        const linhaP = []
        for (let j = 0; j < numColunas; j++) {
            linhaP.push(A[i][j] * B[i][j])
        }
        P.push(linhaP)
    }

    console.log("\n--- Matriz Produto P (Elemento a Elemento) ---")
    for (let i = 0; i < numLinhas; i++) {
        console.log(P[i].join('\t'))
    }
}

calcularProdutoElementoAElemento()