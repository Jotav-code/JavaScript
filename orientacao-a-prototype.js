//Função construtora
//Uma convenção é usar sempre a primeira letra maiuscula para definir
function Pessoa_construtora(nome,idade){
    this.nome = nome;
    this.idade = idade
}
//porem para criar um metodo nesse estilo é um pouco mais complicado de entender ex:

Pessoa_construtora.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}
const joao = new Pessoa_construtora("joao", 21)
joao.falar()

//Outro jeito, melhor de visualização é como fazemos em java por exemplo

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    // e o metodo

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const vitor = new Pessoa("vitor", 22)
vitor.falar()


// tambem temos como aplicar um metodo ao contexto d objeto

function gritar(prefixo){
    console.log(prefixo,this.nome);
}

gritar.call(joao, "oi")

const lista = [2,3,4,5,6,7,8]

console.log(lista.map((x)=> x).join(''))
console.log(lista.forEach((x)=> {
    console.log(x)    
}))

    for(let i = 0; i < lista.length; i++ ){
        console.log(lista[i])
    }


