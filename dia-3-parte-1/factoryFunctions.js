function criarBike(marca, quadro, aro){
    return{
        marca,
        quadro,
        aro,
        andar(){
            console.log("correndo!!")
        }
    }

}

const bike1 = criarBike('Shimano', 17, 29);
console.log(bike1);