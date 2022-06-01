function Bike(marca, quadro, aro){
    this.marca = marca,
    this.quadro = quadro,
    this.aro = aro,
    this.andar = function() {
        console.log('andar de bike!!');
    }

}

const bike = new Bike('caloi', 19, 29);
console.log(bike);

//clonando objeto método 1
const novoObj = Object.assign({
    suspensao: 'hidráulica'

}, bike);

console.log(novoObj);

//clonando objeto método 2

const novoObj2 = {...bike};
console.log(novoObj2);