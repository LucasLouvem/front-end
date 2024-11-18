let jogador1 = 0;
let jogador2 = 0; 
let placar;
let final;
while (jogador1 < 10 && jogador2 < 10) {
    placar = `Jogador 1:${jogador1} | jogador 2: ${jogador2}`;
    alert(placar);
    alert("quem marcou ponto?");
    let pergunta = prompt("Jogador 1 ou Jogador 2?");
    if (pergunta == '1') {
        alert('Ponto Jogador 1');
        jogador1++;
    } else if(pergunta == '2') {
        alert('ponto jogador 2');
        jogador2 ++;
    }
    else{
        alert('Decida um jogador!');
    }
}
final = resultado(jogador1, jogador2);
alert(final);

function resultado(jogador1, jogador2){
    let vencedor;
    jogador1 > jogador2 ? vencedor='Jogador 1' :
    jogador1 < jogador2 ? vencedor="Jogador 2" : vencedor='empate';


    switch(vencedor){
        case 'Jogador 1':
            return 'Jogador 1 venceu!';
        case 'Jogador 2':
            return 'Jogador 2 venceu!'
        case 'empate':
            return 'Empate!';
        default:
            return 'Erro Inesperado.';
    }
}

function escopoLocal() {
     let escopoLocalInterno = “local”; 
} 
console.log(escopoLocalInterno);