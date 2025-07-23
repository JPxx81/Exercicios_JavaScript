// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.


function contarStringsEmObjeto(obj) {
    let contador = 0

    for (const chave in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, chave) && typeof obj[chave] === 'string') {
            contador++
        }
    }

    return contador
}

const meuObjeto1 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    email: "joao@example.com",
    ativo: true,
    hobbies: ["ler", "viajar"]
}

const meuObjeto2 = {
    produto: "Laptop",
    marca: "TechCorp",
    preco: 1200.50,
    descricao: "Um laptop potente e leve.",
    disponivel: true
}

const meuObjeto3 = {
    numero: 123,
    booleano: false,
    array: [1, 2, 3]
}


console.log("--- Objeto 1 ---")
console.log(meuObjeto1)
const numStrings1 = contarStringsEmObjeto(meuObjeto1)
console.log(`Número de propriedades do tipo string: ${numStrings1}\n`)

console.log("--- Objeto 2 ---")
console.log(meuObjeto2)
const numStrings2 = contarStringsEmObjeto(meuObjeto2)
console.log(`Número de propriedades do tipo string: ${numStrings2}\n`)

console.log("--- Objeto 3 ---")
console.log(meuObjeto3)
const numStrings3 = contarStringsEmObjeto(meuObjeto3)
console.log(`Número de propriedades do tipo string: ${numStrings3}\n`)