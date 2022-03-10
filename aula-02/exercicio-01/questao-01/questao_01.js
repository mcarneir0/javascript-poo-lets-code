//  Crie um objeto do tipo curso que tenha os seguintes atributos:
//      nome
//      p1
//      p2
//      media
//  Usando o setter insira o nome do curso, p1 e p2.
//      Para a média considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média"
//      Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2
//  Crie um get que retorne uma mensagem informando o nome do curso e sua média.

const curso = {
    nome: null,
    p1: null,
    p2: null,
    media: null,

    set set_nome(novo_nome) {
        this.nome = novo_nome;
    },
    set set_p1(p1) {
        this.p1 = p1;
    },
    set set_p2(p2) {
        this.p2 = p2;
    },

    get get_media() {
        if (this.p1 <= 0) return "A nota da p1 foi 0, não vai ser possível fazer uma média";
        else return this.media = ((this.p1 + this.p2) / 2).toFixed(1);
    },
    get info() {
        return `Nome do curso: ${this.nome}\nMédia: ${this.get_media}`
    }
}

curso.set_nome = "Javascript POO";
curso.set_p1 = 1;
curso.set_p2 = 10;
console.log(curso.info);
