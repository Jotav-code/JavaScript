const sorteio = [10, 20, 32, 19, 69, 90]; 
let cont = 0;

const get = ()=>{
    let valor = sorteio[cont];
    cont++;
    return valor;
    
}

const print = (texto)=>{
    console.log(texto);
}


module.exports = {
    get: get,
    print: print
} 