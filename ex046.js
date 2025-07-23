// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.


function sumarizarVendasPorVendedor(vendas) {
    const totalVendasPorVendedor = {}
    for (const venda of vendas) {
        const { vendedor, valor } = venda
        if (totalVendasPorVendedor[vendedor]) {
            totalVendasPorVendedor[vendedor] += valor
        } else {
            totalVendasPorVendedor[vendedor] = valor
        }
    }

    return totalVendasPorVendedor
}

const listaDeVendas = [
    { vendedor: "Ana", valor: 150.00 },
    { vendedor: "Bruno", valor: 200.50 },
    { vendedor: "Ana", valor: 300.00 },
    { vendedor: "Carlos", valor: 50.00 },
    { vendedor: "Bruno", valor: 120.00 },
    { vendedor: "Ana", valor: 75.25 },
    { vendedor: "Carlos", valor: 180.00 },
    { vendedor: "Daniela", valor: 400.00 }
]

console.log("--- Lista de Vendas Original ---")
console.log(listaDeVendas)

const vendasSumarizadas = sumarizarVendasPorVendedor(listaDeVendas)

console.log("\n--- Total de Vendas por Vendedor ---")
console.log(vendasSumarizadas)