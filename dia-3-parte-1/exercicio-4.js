verificarVelocidade(85);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    if( velocidade <= velocidadeMaxima)
        console.log('ok');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / 5));
        if( pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log('Pontos', pontos);
    }

}