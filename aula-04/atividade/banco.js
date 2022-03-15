/**
 * Crie uma ou mais classe para representar um app de banco
 * 
 * - Deverá ter diferenciação de cliente PJ e PF
 * 
 * Pense no que deve ou não ser tratado como herança
 * Pense no que deve ou não ser privado
 * Pense em outras coisas que façam sentido
 * Pense em Pense em outras coisas que façam sentido 
 * para um app de banco e que faça consiga implementar
 */

 class Conta {
    #saldo
    constructor() {
        this.conta = parseInt(Math.random()*100000),
        this.agencia = parseInt(Math.random()*10000),
        this.#saldo = 0
    }

    get saldo () { return this.#saldo }

    depositar (valor) {
        this.#saldo += valor;
        console.log(`${this.nome} Você depositou ${valor} e seu saldo atual é ${this.#saldo}`);
    }

    sacar (valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`${this.nome} Você sacou ${valor} e seu saldo atual é ${this.#saldo}!`)
        } else {
            console.log(`Saldo insuficiente, saque não efetuado!`)
        }
    }

    transferir (valor, Conta) {
        if(this.#saldo >= valor){
            this.sacar(valor);
            Conta.depositar(valor);
        } else {
            console.log(`Saldo insuficiente, transferencia não efetuada!`)
        }
    }
}

class Endereco {
    #cep
    #rua
    #numero
    #bairro
    #cidade
    constructor(cep, rua = null, numero = null, bairro = null, cidade = null) {
        this.#cep = cep,
        this.#rua = rua,
        this.#numero = numero,
        this.#bairro = bairro,
        this.#cidade = cidade
    }

    get cep() { return this.#cep }
    get rua() { return this.#rua }
    get numero() { return this.#numero }
    get bairro() { return this.#bairro }
    get cidade() { return this.#cidade }

    set cep(cep) { this.#cep = cep }
    set rua(rua) { this.#rua = rua }
    set numero(numero) { this.#numero = numero }
    set bairro(bairro) { this.#bairro = bairro }
    set cidade(cidade) { this.#cidade = cidade }
}

class Cliente extends Conta{
    #telefone
    #endereco
    constructor(nome, telefone, Endereco) {
        super(),
        this.nome = nome,
        this.#telefone = telefone,
        this.#endereco = Endereco
    }
}

class pF extends Cliente {
    #cpf
    #rg
    constructor(nome, telefone, Endereco, cpf, rg) {
        super(nome, telefone, Endereco),
        this.#cpf = cpf,
        this.#rg = rg
    }
}

class pJ extends Cliente {
    #cnpj
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cnpj) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cnpj = cnpj
    }
}

const end = new Endereco("12345-678", "Rua dos Bobos", 0, "Bairro", "São Paulo");
const pf = new pF("Matheus", "91234-5678", end, "123456789-00", "0987654321");
console.log(pf);
