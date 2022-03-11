class PessoaPrivada {
    #nome
    #idade
    email
    constructor(nome, idade, email) {
        this.#nome = nome;
        this.#idade = idade;
        this.email = email;
    }

    get get_nome() { return this.#nome };
    set set_nome(nome) { this.#nome = nome };
    apresentar() {
        return `O meu nome é ${this.#nome} e tenho ${this.#idade} anos`;
    }
    toJSON() {
        return {
            nome: this.nome,    // Acessado através do getter
            idade: this.#idade, // Acessando a propriedade privada
            email: this.email
        }
    }
}

//  Instanciando a classe PessoaPrivada
const pessoa = new PessoaPrivada("Matheus", 23, "matheus@email.com.br");
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.apresentar());
console.log(JSON.stringify(pessoa));
console.log(pessoa.toJSON());
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
