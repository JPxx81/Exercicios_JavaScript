// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.


function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

const obj1 = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo",
    interesses: ["ler", "filmes"]
}

const obj2 = {
    idade: 31,
    email: "alice@example.com",
    cidade: "Rio de Janeiro",
    hobbies: ["caminhada", "cozinhar"]
}

const objetoCombinado = combinarObjetos(obj1, obj2)

console.log("--- Objeto 1 (obj1) ---")
console.log(obj1)

console.log("\n--- Objeto 2 (obj2) ---")
console.log(obj2)

console.log("\n--- Objeto Combinado ---")
console.log(objetoCombinado)