// 47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.


function transformarObjeto(obj, transformFn) {
    const novoObjeto = {}
    for (const chave in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, chave)) {
            novoObjeto[chave] = transformFn(obj[chave], chave)
        }
    }

    return novoObjeto
}

const dadosNumericos = {
    a: 10,
    b: 20,
    c: 30,
    d: "texto",
    e: true
}

console.log("--- Exemplo 1: Dobrar números e converter outros para string ---")
console.log("Objeto Original:", dadosNumericos)

const dobrarNumeros = (valor, chave) => {
    if (typeof valor === 'number') {
        return valor * 2
    }
    return String(valor)
}

const resultado1 = transformarObjeto(dadosNumericos, dobrarNumeros)
console.log("Objeto Transformado:", resultado1)

const dadosString = {
    primeiroNome: "alice",
    sobrenome: "silva",
    idade: 25,
    cidade: "porto alegre"
}

console.log("\n--- Exemplo 2: Converter strings para maiúsculas ---")
console.log("Objeto Original:", dadosString)

const paraMaiusculas = (valor) => {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    }
    return valor
}

const resultado2 = transformarObjeto(dadosString, paraMaiusculas)
console.log("Objeto Transformado:", resultado2)

const dadosComPrefixo = {
    id: 1,
    nomeProduto: "Caneta",
    preco: 2.50
}

console.log("\n--- Exemplo 3: Adicionar prefixo da chave ao valor ---")
console.log("Objeto Original:", dadosComPrefixo)

const adicionarPrefixoChave = (valor, chave) => {
    return `${chave}: ${valor}`
};

const resultado3 = transformarObjeto(dadosComPrefixo, adicionarPrefixoChave)
console.log("Objeto Transformado:", resultado3)