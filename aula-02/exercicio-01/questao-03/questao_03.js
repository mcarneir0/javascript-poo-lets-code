// Refaça o exercício da TV utilizando uma função construtora
// Refaça o exercício da TV utilizando a sintaxe de classe (class)

class TV {
    constructor(canal = 0, volume = 0, ligada = false) {
        this.canal = canal,
        this.volume = volume,
        this.ligada = ligada
    }
    
    liga() { return this.ligada = true; }
    desliga() { return this.ligada = false; }
    mudaDeCanal(canal) { return this.canal = canal}
    aumentaVolume() { return this.volume = ++this.volume}
    diminuiVolume() { return this.volume = --this.volume}
}

const tv = new TV();
console.log(tv);

tv.liga();
tv.mudaDeCanal(10);
tv.aumentaVolume();
tv.aumentaVolume();
tv.diminuiVolume();

console.log(tv);
