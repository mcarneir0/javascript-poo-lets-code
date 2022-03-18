function erro() {
    let num = 1;
    return num.toUpperCase();
}

//  Tenta executar algo
try {
    erro();
}
//  Pega o erro
catch(erro) {
    console.log(erro);
    console.log(erro.name);
    console.log(erro.message);
}
//  Executa algo independente se houve erro ou não
finally {
    console.log("Saindo do try");
}


function validaErro(mensagem) {
    this.erro = mensagem;
}

function validaString(string) {
    try {
        if (typeof(string) != "string") {
            //  throw interrompe a execução do código e lança um erro
            // throw new TypeError("O nome deve ser uma String");
            throw new validaErro("O nome deve ser uma String");
        } else {
            console.log(`Olá ${string}`);
        }
    } catch(e) {
        console.log(e);
    }
}

validaString(11);
