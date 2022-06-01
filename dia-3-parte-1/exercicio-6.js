const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'

};

exibiPropriedades(filme);
function exibiPropriedades(obj) {
    for(prop in obj)
        if(typeof prop === 'string')
            console.log(prop, obj[prop]);
}