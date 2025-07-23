// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.


function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {}

    for (const item in inventarioLojaA) {
        if (Object.prototype.hasOwnProperty.call(inventarioLojaA, item)) {
            inventarioCombinado[item] = inventarioLojaA[item]
        }
    }

    for (const item in inventarioLojaB) {
        if (Object.prototype.hasOwnProperty.call(inventarioLojaB, item)) {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += inventarioLojaB[item]
            } else {
                inventarioCombinado[item] = inventarioLojaB[item]
            }
        }
    }

    return inventarioCombinado;
}

const inventarioLojaA = {
    "camiseta": 10,
    "calça": 5,
    "boné": 8,
    "meia": 20
}

const inventarioLojaB = {
    "calça": 7,
    "sapato": 12,
    "camiseta": 15,
    "cinto": 3
}

console.log("--- Inventário Loja A ---")
console.log(inventarioLojaA)

console.log("\n--- Inventário Loja B ---")
console.log(inventarioLojaB)

const inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB)

console.log("\n--- Inventário Combinado ---")
console.log(inventarioFinal)