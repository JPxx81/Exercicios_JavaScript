// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.


const pessoa = {
    nome: "Bia",
    idade: 30
}

console.log(`A idade da pessoa é: ${pessoa.idade}`)

pessoa.email = "alice.exemplo@email.com"

console.log("\nObjeto pessoa após adicionar email:")
console.log(pessoa)