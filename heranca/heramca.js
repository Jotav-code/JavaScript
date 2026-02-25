const idade = {
    idade: 20
}
const joao = {
    nome: "joao",
    __proto__: idade
}
console.log(joao.idade)