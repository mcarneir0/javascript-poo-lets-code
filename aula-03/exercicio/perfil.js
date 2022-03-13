//  Faça uma classe Perfil que tem as seguintes informações:
//      nome, avatar (foto de perfil) e tema.
//  Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark"
//  e que a foto de perfil deve ser uma url (iniciada com http ou https).

class Perfil {
    #avatar;
    #tema;
    constructor(nome, avatar = null, tema = "light") {
        this.nome = nome;
        this.#avatar = avatar;
        this.#tema = tema;
    }

    get get_tema() { return this.#tema }
    get get_avatar() { return this.#avatar }

    set set_tema(tema) {
        tema = tema.toLowerCase();
        while (tema != "light" && tema != "dark") {
            tema = prompt("Opção inválida. Escolha LIGHT ou DARK").toLowerCase();
        }
        this.#tema = tema;
    }
    set set_avatar(url) {
        url = url.toLowerCase();
        while (!url.startsWith("http")) {
            url = prompt("Insira uma URL válida (iniciando com HTTP)").toLowerCase();
        }
        this.#avatar = url;
    }
}

const p = new Perfil("Matheus");
console.log(p);
p.set_avatar = "https://raw.githubusercontent.com/mcarneir0/portfolio/699ab1e52200d2f4aec93b27ef70dd6342094dd9/images/foto.jpg";
p.set_tema = "dark";
console.log(p);
