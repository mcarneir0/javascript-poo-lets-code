//  Faça um objeto TV com as propriedades:
//      canal, volume e ligada
//  e métodos
//      liga, desliga, mudaDeCanal, aumentaVolume e diminuiVolume.

const TV = {
    canal: null,
    volume: 0,
    ligada: null,

    liga() { return this.ligada = true; }, 
    desliga() { return this.ligada = false; },
    mudaDeCanal(canal) { return this.canal = canal},
    aumentaVolume() { return this.volume = ++this.volume},
    diminuiVolume() { return this.volume = --this.volume},
}

console.log(TV.liga());
console.log(TV.mudaDeCanal(10));
console.log(TV.aumentaVolume());
console.log(TV.diminuiVolume());
console.log(TV.desliga());