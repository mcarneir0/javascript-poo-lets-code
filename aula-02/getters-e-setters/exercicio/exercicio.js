// Construa um objeto do tipo Carro que contenha os seguintes atributos: 
//   - cor
//   - marca

// Insira a cor do carro utilizando getter e setter;
// Insira a marca do carro utilizando getter e setter;

// Crie um get que retorne uma mensagem informando a marca e a cor do carro.

const carro = {
    cor: "",
    marca: "",

    get get_cor() { return this.cor },
    get get_marca() { return this.marca },
    get get_info() {
        return "O carro é um " + this.marca + " da cor " + this.cor;
    },

    set set_cor(nova_cor) { this.cor = nova_cor},
    set set_marca(nova_marca) { this.marca = nova_marca}
}

carro.set_cor = "Branco";
carro.set_marca = "Onix";
console.log(carro.get_info);
