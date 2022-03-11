//  Crie uma classe CNH que tenha como propriedades:
//      país e idade que, por padrão, deve ser maior ou igual a 18,
//      16 se for igual a US ou CA
//      e 21 se corresponder a CH ou RU.
//  Se o país for BR deve também ser informada a categoria da carteira
//      (A, B, C, D, E, AB, AC, AD ou AE).

class CNH {
    constructor(pais, idade, categoria = null) {
        this.pais = pais;
        this.idade = idade;
        this.categoria = categoria
    }

    info() {
        if (this.categoria == "") return `País: ${this.pais}\nIdade: ${this.idade}`;
        else return `País: ${this.pais}\nIdade: ${this.idade}\nCategoria: ${this.categoria}`;
    }
}

function verificar() {
    const nacionalidade = document.getElementById("nacionalidade").value;
    const idade = document.getElementById("idade").value;
    const categoria = document.getElementById("categoria").value;

    if (nacionalidade == "US" || nacionalidade == "CA") {
        if (idade >= 16) {
            const cnh = new CNH(nacionalidade, idade, categoria);
            console.log(cnh.info());
        } else {
            alert("Você não tem idade para dirigir.");
            return;
        }
    }
    else if (nacionalidade == "CH" || nacionalidade == "RU") {
        if (idade >= 21) {
            const cnh = new CNH(nacionalidade, idade, categoria);
            console.log(cnh.info());
        } else {
            alert("Você não tem idade para dirigir.");
            return;
        }
    }
    else {
        if (idade >= 18) {
            const cnh = new CNH(nacionalidade, idade, categoria);
            console.log(cnh.info());
        } else {
            alert("Você não tem idade para dirigir.");
            return;
        }
    }
}

//  Adiciona Categoria na tela ao escolher o Brasil
document.getElementById("nacionalidade").onchange = function() {
    const nacionalidade = document.getElementById("nacionalidade");
    const espaco01 = document.getElementById("espaco-01");
    const label = document.getElementById("label");
    const categoria = document.getElementById("categoria");
    const espaco02 = document.getElementById("espaco-02");

    if (nacionalidade.value == "BR") {
        espaco01.style.display = "block";
        label.style.display = "inline-block";
        categoria.style.display = "inline-block";
        espaco02.style.display = "block";
    } else {
        espaco01.style.display = "none";
        label.style.display = "none";
        categoria.style.display = "none";
        espaco02.style.display = "none";
    }
}
