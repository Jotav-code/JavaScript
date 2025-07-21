const pessoa = {
    nome: "joao",
    idaded: 20
};

//podemos criar um atributo desse jeito
pessoa.altura = 1.80;
console.log(pessoa);

// podemos deletar um atributo também

// delete pessoa.nome;
// console.log(pessoa);

//podemos fazer um acesso dinamico ao objeto

const atributo = pessoa['nome'];
console.log(atributo);