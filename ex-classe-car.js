class carro {
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = 1/gastoMedio;
    }

    calcularMediadeGasto(KM, precoDoCombustivel){
        console.log(`O gasto medio para rodar ${KM} KM é de ${(KM*this.gastoMedio) * precoDoCombustivel}`);
    }
}

const celta = new carro("celta", "vermelho", 10);

celta.calcularMediadeGasto(100, 8);
