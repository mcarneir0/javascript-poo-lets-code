const ave = {
    especie: "Arara",
    get_especie() {
        return this.especie;
    }
}

console.log(ave.get_especie());

const peixe = {
    especie: "Salmão"
}

const px = ave.get_especie.bind(peixe);
console.log(px());
