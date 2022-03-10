class Ave {
    constructor(cor, especie) {
        this.cor = cor,
        this.especie = especie
    }
}

// instanciando a classe ave
const ave = new Ave("Branco", "Galinha");
console.log(ave);


class Passaro extends Ave {
    constructor(cor, especie, voa) {
        // ao usar o extends é necessário utilizar o super() e passar os atributos da classe pai
        super(cor, especie),
        this.voa = voa
    }
}

const passaro = new Passaro("Azul", "Arara", true);
console.log(passaro);
