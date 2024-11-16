let chute;
let numeroMaquina = parseInt(numeroAleatorio());
let numeroSorteado = prompt("");
let decisao
while(numeroSorteado != numeroMaquina){
    decisao = prompt("Qual numero estou pensando?")
    if (decisao == numeroMaquina) {
        alert("Voce acertou!")
        break
    } 
    else{
        if(decisao > numeroMaquina) {
            alert("Chute mais baixo")
        } 
        else{
            alert("Chute mais alto")
        }
    } 
}

function numeroAleatorio(){
    return Math.random() * 100 + 1;
}