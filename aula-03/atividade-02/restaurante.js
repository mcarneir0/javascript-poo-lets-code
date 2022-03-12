//  Crie uma classe Restaurante com as propriedades
//      cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado
//          (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos).
//  Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade
//      e, para isso, precisamos de um método
//      entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e,
//          em caso positivo, o tempo estimado de entrega.

class Restaurante {
    #tempo_de_entrega;
    constructor(cidade, delivery = false, pedidosPendentes = 0) {
        this.cidade = cidade,
        this.delivery = delivery,
        this.pedidosPendentes = pedidosPendentes,
        this.#tempo_de_entrega = this.#calcula_tde;
    }

    #calcula_tde = () => 10 + 2 * this.pedidosPendentes;

    entregaPedido(cidade_do_cliente) {
        if (this.delivery) {
            if(this.cidade == cidade_do_cliente) {
                this.pedidosPendentes++;
                return `O prazo de entrega é de ${this.#calcula_tde()} minutos`;
            }
            else return "Este restaurante não atende a sua região";
        }
        else return "Este restaurante não realiza delivery";
    }
}

restaurante1 = new Restaurante("Fortaleza", true, 2);
console.log(restaurante1.entregaPedido("Fortaleza"));
console.log(restaurante1.entregaPedido("São Paulo"));
