let endereco = {
    rua:'Manoel Leal',
    cidade: 'Camaçari',
    cep:'42833-000'
}

function exibirEndereco(endereco){
    for (let chave in endereco)
        console.log(chave, endereco);
}

exibirEndereco(endereco);