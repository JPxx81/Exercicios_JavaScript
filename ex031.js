// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.


function contarEFiltrarMatriz() {

    const tamanho = 30
    const V = []
    const A = 15

    let contadorA = 0
    const X = []

    console.log("--- Matriz V (30x30) ---")
    for (let i = 0; i < tamanho; i++) {
        const linha = []
        for (let j = 0; j < tamanho; j++) {
            const numeroAleatorio = Math.floor(Math.random() * 30) + 1
            linha.push(numeroAleatorio)
        }
        V.push(linha)
    }

    console.log(`\n--- Valor A a ser procurado: ${A} ---`)

    for (let i = 0; i < tamanho; i++) {
        const linhaX = []
        for (let j = 0; j < tamanho; j++) {
            if (V[i][j] === A) {
                contadorA++
            } else {
                linhaX.push(V[i][j])
            }
        }
        if (linhaX.length > 0) {
            X.push(linhaX)
        }
    }

    console.log(`\nNúmero de vezes que o valor ${A} aparece na matriz V: ${contadorA}`)

    console.log("\n--- Matriz V Original ---")

    for (let i = 0; i < tamanho; i++) {
        console.log(V[i].join('\t'))
    }

    console.log("\n--- Matriz X (Elementos de V diferentes de A) ---")
    if (X.length === 0) {
        console.log("Todos os elementos da matriz V são iguais a A, ou a matriz X está vazia.")
    } else {
        for (let i = 0; i < X.length; i++) {
            console.log(X[i].join('\t'))
        }
    }
}

contarEFiltrarMatriz()