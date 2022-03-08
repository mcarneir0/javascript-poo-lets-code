const aluno = {
    nome: "Matheus Carneiro",
    matricula: "2022837001",
    idade: 23,
    set_curso(curso = "Nenhum") {
        this.curso = curso;
    }
}

console.log(aluno);
aluno.set_curso("Dev. Full Stack");
console.log(aluno);
