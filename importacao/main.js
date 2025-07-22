const {get , print} = require('./funcoes-auxiliares')


for(let i = 0; i < 5; i++){
    let maior = 0;
    if(print(get()) > maior){
        maior = print(get());
    }
    console.log(maior);
}













// //exemplo de como pegar;

// const vitor = {
//     nome: "joao",
//     idade: 20
// }

// const { nome } = vitor;
// console.log(nome);