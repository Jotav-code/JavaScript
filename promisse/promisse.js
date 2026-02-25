
// const promisseDeQualquerNumero = new Promise((resolve,reject)=>{

    
//     setTimeout(()=>{
//         const numero = parseInt(Math.random() * 100)
//         resolve(numero)
//     }, 2000)

// })
// console.log("vai filhao")
// promisseDeQualquerNumero
//     .then((value)=> console.log(value))




/*
*   EXEMPLO DE LEITURA DE ARQUIVO UTILIZANDO UMA PROMISSE
*   OBS: 'fs' É UMA PALAVRA DO NODEJS PARA LEITURA DE ARQUIVO
*
*/

const fs = require('fs')

/*
* de forma awit e async
*/

function transformarTexto ( texto ){
    let textoTemp = texto.split('\n').slice(1)
    return textoTemp.map((separador)=>{
        const [nome, idade] = separador.split(';')
        return{
            nome,
            idade
        }
    })
}
async function lerArquivo() {
    try {
        const arquivo = await fs.promises.readFile('tarefas.csv') //ele já devolve o arquivo
        const texto = arquivo.toString('utf-8')
        console.log(transformarTexto(texto))
    } catch (error) {
        console.error(error)
    }
}
lerArquivo()
// const promessa = fs.promises.readFile('tarefas.csv')

// promessa
//     .then((arquivo) => {
//         console.log(arquivo.toString('utf-8'))
//         return arquivo.toString('utf-8')
//     })
//     .then((arquivoSemCab) => {
//         console.log(arquivoSemCab.split('\n').slice(1))
//         return arquivoSemCab.split('\n').slice(1)
//     })
//     .then((nomesEidade)=>{
//         return nomesEidade.map((lista)=>{
//             const [nome, idade] = lista.split(';')
            
//             return {
//                 nome,
//                 idade
//             }
//         })
//     })
//     .then((ogjetoNome)=> console.log(ogjetoNome))
//     .catch((error)=>{
//         console.log('deu ruim', error)
//     })
//     .finally(()=>{
//         console.log('finalizando...')
//     })