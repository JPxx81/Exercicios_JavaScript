// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.


function normalizarMatrizPorLinha() {

    const numLinhas = 12
    const numColunas = 13
    const M_original = []
    const M_modificada = []

    console.log("--- Matriz Original M(12,13) ---")
    for (let i = 0; i < numLinhas; i++) {
        const linha = []
        for (let j = 0; j < numColunas; j++) {
            linha.push(parseFloat((Math.random() * 100 - 50).toFixed(2)))
        }
        M_original.push(linha)
        console.log(linha.map(n => n.toFixed(2)).join('\t'))
    }

    for (let i = 0; i < numLinhas; i++) {
        const linhaOriginal = M_original[i]
        let maiorModuloNaLinha = 0

        for (let j = 0; j < numColunas; j++) {
            const valorAtual = linhaOriginal[j]
            if (Math.abs(valorAtual) > maiorModuloNaLinha) {
                maiorModuloNaLinha = Math.abs(valorAtual)
            }
        }

        if (maiorModuloNaLinha === 0) {
            console.log(`Atenção: Linha ${i + 1} contém apenas zeros. Não será modificada.`)
            M_modificada.push([...linhaOriginal])
            continue
        }

        const linhaModificada = []
        for (let j = 0; j < numColunas; j++) {
            const valorDividido = linhaOriginal[j] / maiorModuloNaLinha
            linhaModificada.push(parseFloat(valorDividido.toFixed(4)))
        }
        M_modificada.push(linhaModificada)
    }


    console.log("\n--- Matriz Modificada (M_modificada) ---");
    for (let i = 0; i < numLinhas; i++) {
        console.log(M_modificada[i].map(n => n.toFixed(4)).join('\t'))
    }
}

normalizarMatrizPorLinha()