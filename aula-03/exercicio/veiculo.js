//  Construa uma classe Veiculo que tem como propriedades:
//      rodas (1 a n), usaCombustivel (true/false),
//  uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex')
//      que herda de Veiculo
//  e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas)
//      que também herda as características de Veiculo.

class Veiculo {
    constructor(rodas, usaCombustivel) {
        while (rodas < 1) {
            rodas = parseInt(prompt("O veículo deve ter no mínimo 1 roda"));
        }
        this.rodas = rodas;
        this.usaCombustivel = usaCombustivel;
    }
}

class Carro extends Veiculo {
    constructor(rodas = 4, usaCombustivel = true, tipoDeCombustivel) {
        super(rodas, usaCombustivel);
        tipoDeCombustivel = tipoDeCombustivel.toLowerCase();
        while (tipoDeCombustivel != "gasolina" && tipoDeCombustivel != "alcool" && tipoDeCombustivel != "flex") {
            tipoDeCombustivel = prompt("O carro só pode ter um dos seguintes combustíveis:\nGASOLINA, ALCOOL ou FLEX").toLowerCase();
        }
        this.tipoDeCombustivel = tipoDeCombustivel;
    }    
}

class Bicicleta extends Veiculo {
    constructor(rodas = 2, usaCombustivel = false, infantil) {
        while (rodas < 2) {
            rodas = parseInt(prompt("A bicicleta deve ter no mínimo 2 rodas"));
        }
        super(rodas, usaCombustivel);
        this.infantil = infantil;
    }
}

const carro = new Carro(4, true, "flex");
console.log(carro);
const bike = new Bicicleta(2, false, false);
console.log(bike);
