//  Crie uma classe Sorteio que tem o
//      número de pessoas inscritas
//      e um método sorteiaPremio
//          que sorteia um número que corresponderá ao número de inscrição do participante
//          e declara o vencedor. 

class Sorteio {
    constructor(qnt_de_inscritos) {
        this.inscritos = qnt_de_inscritos;
    }

    sorteiaPremio() {
        for (let i = 0; i < this.inscritos; i++) {
            console.log(`O vencedor do sorteio foi o inscrito nº ${Math.floor(Math.random() * this.inscritos + 1)}`);
        }
    }
}

loteria = new Sorteio(100);
loteria.sorteiaPremio();
