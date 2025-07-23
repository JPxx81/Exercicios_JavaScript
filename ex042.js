// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.


const dados = {
    nome: "Carlos",
    idade: 45,
    cidadesVisitadas: ["São Paulo", "Rio de Janeiro", "Curitiba"],
    ehAtivo: true,
    numerosSorteados: [7, 14, 21, 28, 35],
    email: "carlos.teste@example.com",
    filhos: ["Ana", "Bruno"],
    saldoConta: 1500.75
}

function obterApenasArrays(obj) {
    const novoObjeto = {}

    for (const chave in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, chave) && Array.isArray(obj[chave])) {
            novoObjeto[chave] = obj[chave]
        }
    }
    return novoObjeto
}

const dadosArrays = obterApenasArrays(dados)

console.log("--- Objeto Original (dados) ---")
console.log(dados)

console.log("\n--- Novo Objeto (apenas arrays) ---")
console.log(dadosArrays)




