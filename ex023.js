// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.


function criarEImprimirMatrizIdentidade() {
    const tamanho = 7
    const matrizIdentidade = []

    for (let i = 0; i < tamanho; i++) {
        const linha = []
        for (let j = 0; j < tamanho; j++) {
            if (i === j) {
                linha.push(1)
            } else {
                linha.push(0)
            }
        }
        matrizIdentidade.push(linha)
    }

    console.log("--- Matriz Identidade 7x7 ---")
    for (let i = 0; i < tamanho; i++) {
        console.log(matrizIdentidade[i].join(' '))
    }
}

criarEImprimirMatrizIdentidade()