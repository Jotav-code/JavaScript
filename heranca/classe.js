class pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever (){
        console.log(`Seu nome: ${this.nome} sua idade: ${this.idade}`);
    }
}

// const vitor = {
//     nome: vitor,
//     idade: 20,

//     descrever: ()=>{
//         console.log(`Meu nome é: ${this.nome}, e minha idade é: ${this.idade}`);
//     }
// }

const pessoa1 = new pessoa("vitor", 22);



console.log(pessoa1);
