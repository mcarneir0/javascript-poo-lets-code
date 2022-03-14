class Animal {
    constructor(especie) {
        this.especie = especie;
    }
}


//  Extendendo a classe pessoa de animal
class Pessoa extends Animal {
    constructor(nome, idade, especie = "homo sapiens sapiens") {
        super(especie),
        this.nome = nome,
        this.idade = idade
    }

    imprimeDados(saudacao) {
        return  `${saudacao}, ${th.nome} tem ${this.idade} anos.`
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade),
        //  o método super executa o construtor da classe pai
        //  que nesse caso é a classe Pessoa
        //  internamente o método super está fazendo
        //  this.nome = nome
        //  this.idade = idade

        this.cpf = cpf,
        this.rg = rg
    }
}

const matheus = new Cidadao("Matheus", 23, "123.456.789-00", "0987654321");
console.log(matheus);
