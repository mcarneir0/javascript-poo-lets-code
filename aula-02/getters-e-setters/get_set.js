var variavel = {
    valor: 0,
    get moeda() {
        return "R$ " + this.valor.toFixed(2).replace(".",",");
    },
    get int() {
        return this.valor;
    },
    set int(i) {
        this.valor = i;
    },
}
