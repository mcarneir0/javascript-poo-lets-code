const lancamentos = [];

class Bank {
    #passcode;
    #balance;
    constructor(name, account, balance, passcode = "Senha123", limite) {
        this.name = name,
        this.account = account,
        this.#balance = balance,
        this.#passcode = passcode,
        this.limite = limite
    }
    get passcodes () {
        return this.#passcode;
    }

    set passcodes(i) {
        return this.#passcode = i;
    }
    get Name() {
        return this.name;
    }

    set Name(i) {
        return this.name = i;
    }
    
    get Cpf() {
        return this.cpf;
    }

    set Cpf(c) {
            this.cpf = c;
        }
    get balance() {
        return this.#balance;
    }
    conferirSenha () {
        if (this.#passcode === "Senha123") {
            this.#passcode=true;
            return `Acesso permitido`;
        } else {
            this.#passcode=false;
            return "Acesso negado";
        }
    }

    saque = (valor) => {
        if (valor <= this.#balance & this.#passcode){
            this.#balance -= valor;
            const lancamento = {nome: this.name, tipo: 'saque', valor: valor, horario: Date()};
            lancamentos.push(lancamento);
            return `Valor de R$ ${valor} Retirado com Sucesso | Saldo Atual = | R$ ${this.#balance}`;     
        }else if( valor>this.#balance & this.#passcode){
            return "Saldo indisponivel";
        }else{
            return "Senha Incorreta" ;
        }
    }

    deposito = (valor ) => {
        this.#balance += valor;
        const lancamento = {nome: this.name, tipo: 'deposito', valor: valor, horario: Date()};
        lancamentos.push(lancamento);
        return `valor de R$ ${valor} Adicionado com sucesso | Saldo atual = R$ ${this.#balance}`;
    }

    emprestimo = (valor) => {
        if(valor <= this.limite & this.#passcode) {
            this.limite += valor;
            this.#balance = this.#balance + valor;
            return `Empréstimo de R$ ${valor} realizado | Saldo Atual = R$ ${this.#balance}.`;
        }else if( valor>this.#balance & this.#passcode){
            return "Limite indsponível";
        }else{
            return 'Senha Incorreta';
        }
    }

    transferencia = (valor ) => {
        if (valor <= this.#balance & this.#passcode ){
            this.#balance -= valor;
            const lancamento = {nome: this.name, tipo: 'transferencia', valor: valor, horario: Date()};
            lancamentos.push(lancamento);
            return `Transferência de R$ ${valor} Realizada com sucesso Saldo atual = R$ ${this.#balance}`;
        }else if( valor>this.#balance & this.#passcode){
            return "Saldo indisponivel";
        }else{
            return "Senha Incorreta";
        }
    }

    retornaDados = () => {

    }

    calculaJuros (valor, diasAtraso, taxaJuros = 2.5) {
        if (diasAtraso == 1) {
            return (valor*0.01).toFixed(2);
        } else if (diasAtraso == 2) {
            return (valor*0.025).toFixed(2);
        } else {
            return (valor*(1+taxaJuros/100)**diasAtraso - valor).toFixed(2);
        }
    }


}

class PJ extends Bank{
    constructor(name, account, balance, passcode, cnpj, limite = 20000) {
        super(name, account, balance, passcode);
        this.cnpj = cnpj,
        this.limite = limite;
    }
    retornaDados = () => {
        return `CNPJ: ${this.cnpj}`
    }
}

class PF extends Bank{
    constructor(nome, account, balance, passcode, cpf, rg, limite = 10000) {
        super(nome, account, balance, passcode, limite),
        this.cpf = cpf,
        this.rg = rg
    }
    retornaDados = () => {
        return `CPF: ${this.cpf}\nRG: ${this.rg}`
    }
}

/*
const joao = new PF('João', 0000, 2000, 'passcode', 01010101);
console.log(joao); // PF {name: 'João', saque: ƒ, deposito: ƒ, extrato: ƒ, emprestimo: ƒ, …}
console.log(joao.saque(300)); // Valor retirado: R$ -300
console.log(joao.extrato);
console.log(joao.saque(3000)); // Valor indisponível
console.log(joao.emprestimo(4000)); // Empréstimo de R$ 2700 realizado.
console.log(joao.saque(3000)); // Valor indisponível
*/

console.log("=== Pessoa Fisica ===")
const pessoa2 = new PF("Gabriel", 0001, 2000, "Senha123", '087.463.636-02', '123456-7');
console.log(pessoa2.balance);
console.log(pessoa2);
console.log(pessoa2.conferirSenha());
console.log(pessoa2.emprestimo(200));
console.log(pessoa2.deposito(300));
console.log(pessoa2.saque(100));
console.log(pessoa2.transferencia(500));
console.log(pessoa2.retornaDados());
console.log(lancamentos);
console.log(pessoa2.deposito(1000));
console.log(lancamentos);
console.log(pessoa2.calculaJuros(637, 1));
console.log(pessoa2.calculaJuros(637, 2));
console.log(pessoa2.calculaJuros(637, 3));
console.log(pessoa2.calculaJuros(1000, 4, 3.5));
console.log(pessoa2.calculaJuros(637, 4, 3.5));


// console.log("=== Pessoa Juridica ===")
// const pessoa3 = new PJ("Debora", 0002, 3000, "Senha12", 12332133);
// console.log(pessoa3.balance)
// console.log(pessoa3);
// console.log(pessoa3.conferirSenha());
// console.log(pessoa3.deposito(500));
// console.log(pessoa3.saque(400));
// console.log(pessoa3.emprestimo(100));
// console.log(pessoa3.transferencia(500));
// console.log(pessoa3.retornaDados());