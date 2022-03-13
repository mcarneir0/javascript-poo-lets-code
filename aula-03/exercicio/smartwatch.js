//  Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro).
//  Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados
//  e um método resetOnMidnight() que reseta os passos para 0.

class Smartwatch {
    #passos;
    constructor(passos = 0) {
        this.#passos = passos;
    }

    get get_passos() { return this.#passos }

    get aumenta_passos() { return ++this.#passos }
    
    resetOnMidnight() { this.#passos = 0 }
}
const smart = new Smartwatch();
console.log(smart);
console.log(smart.aumenta_passos);
console.log(smart.aumenta_passos);
console.log(smart.aumenta_passos);
console.log(smart.aumenta_passos);
console.log(smart.aumenta_passos);
console.log(smart.aumenta_passos);
console.log(smart.aumenta_passos);
console.log(smart.get_passos);
smart.resetOnMidnight();
console.log(smart.get_passos);
