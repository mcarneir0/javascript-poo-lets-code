class Pessoa {
    constructor(nome, idade, endereco) {
        this.nome = nome,
        this.idade = idade,
        this.endereco = endereco
    }

    cumprimentaPessoa = () => `Olá ${this.nome}`;
}

class PF extends Pessoa {
    constructor(nome, idade, endereco, rg) {
        super(nome, idade, endereco),
        this.rg = rg
    }

    //  Polimorfismo: sobrescrever um método de uma classe pai
    cumprimentaPessoa = () => `Olá ${this.nome} do RG: ${this.rg}`;
}

const pessoaNormal = new Pessoa("Matheus", 23, "Rua 2");
const pessoaFisica = new PF("Jaque", 28, "Let's Code", "123456789");

console.log(pessoaNormal.cumprimentaPessoa());
console.log(pessoaFisica.cumprimentaPessoa());
