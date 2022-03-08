const pessoa = {
    nome: "Matheus",
    idade: 23,
    cumprimenta_pessoa(nome = "") {
        return console.log("Seja bem vindo: " + nome);
    }
};

const mensagem = pessoa.cumprimenta_pessoa("Matheus");


//  THIS
//  serve para acessar o próprio objeto que foi instanciado
const counter = {
    count: 0,
    next: function() {
        return this.count++;
    }
};
console.log(counter.next());
console.log(counter.next());


//  BIND
//  serve para utilizar a função de um objeto x
//  com os atributos de um objeto y
//  ex. var1 = obj.function.bind(outro_obj);
let carro = {
    marca: "Hyundai",
    get_marca: function() {
        return this.marca;
    }
};
console.log(carro.get_marca());

//  Não funciona
// let modelo = carro.get_marca;
// console.log(modelo());

//  Funciona, é necessário utilizar o bind
let modelo2 = carro.get_marca.bind(carro);
console.log(modelo2());


//  CONSTRUTOR
function Carro(placa, marca) {
    this.placa = placa;
    this.marca = marca;
};

//  adicionando função dentro do contrutor Carro
//  utilizando prototype
Carro.prototype.get_placa = function() {
    return this.placa;
};


//  INSTÂNCIAMENTO DE OBJETOS
let carro1 = new Carro("LET-2022", "BMW");
console.log(carro1);


//  tratamento de erro
//  verifica se o objeto foi criado corretamente
function Carro2(marca) {
    // if (!(this instanceof Carro2))   //  também funciona
    if (! new.target) {
        throw Error("Use o operador new para instanciar o objeto");
    }
}
