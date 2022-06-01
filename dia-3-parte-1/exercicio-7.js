somar(10);
function somar(limite){
    let multiplos_de_3 = 0;
    let multiplos_de_5 = 0;
    for(i =0; i <= limite; i++){
        if(i % 3 === 0)
        multiplos_de_3 += i;
        if(i % 5 ===0)
        multiplos_de_5 += i;
    }

    console.log(multiplos_de_3, multiplos_de_5);

}