function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso;
}

aluno = new Aluno(
    "Matheus Carneiro",
    23,
    "matheusfeitosa@outlook.com",
    "2022837001",
    "Dev. Full Stack"
);

console.log(aluno);

Aluno.prototype.get_curso = function() {
    return this.curso;
}

console.log(aluno.get_curso());
