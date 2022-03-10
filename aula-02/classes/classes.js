class Pessoa {
    constructor(nome, email, idade) {
        this.nome = nome,
        this.email = email,
        this.idade = idade
    }
}

// instanciando a função construtora
const pessoa = new Pessoa(
    "Matheus",
    "matheus@email.com",
    23
);

console.log(pessoa);
