// 49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.


function organizarTransacoesPorCategoria(transacoes) {
    const transacoesPorCategoria = {}
    for (const transacao of transacoes) {
        const { categoria, valor } = transacao
        if (!transacoesPorCategoria[categoria]) {
            transacoesPorCategoria[categoria] = {
                transacoes: [],
                subtotal: 0
            }
        }

        transacoesPorCategoria[categoria].transacoes.push(transacao)
        transacoesPorCategoria[categoria].subtotal += valor
    }

    return transacoesPorCategoria
}

const listaDeTransacoes = [
    { id: 1, valor: 50.00, data: "2025-07-01", categoria: "Alimentação" },
    { id: 2, valor: 25.50, data: "2025-07-01", categoria: "Transporte" },
    { id: 3, valor: 120.00, data: "2025-07-02", categoria: "Moradia" },
    { id: 4, valor: 30.00, data: "2025-07-02", categoria: "Alimentação" },
    { id: 5, valor: 15.75, data: "2025-07-03", categoria: "Transporte" },
    { id: 6, valor: 200.00, data: "2025-07-03", categoria: "Lazer" },
    { id: 7, valor: 80.00, data: "2025-07-04", categoria: "Alimentação" },
    { id: 8, valor: 100.00, data: "2025-07-04", categoria: "Lazer" },
    { id: 9, valor: 45.00, data: "2025-07-05", categoria: "Moradia" }
]

console.log("--- Lista de Transações Original ---")
console.log(listaDeTransacoes)

const transacoesOrganizadas = organizarTransacoesPorCategoria(listaDeTransacoes)

console.log("\n--- Transações Organizadas por Categoria ---")
console.log(JSON.stringify(transacoesOrganizadas, null, 2))