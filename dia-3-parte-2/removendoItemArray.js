const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

//início
const primeiro= numeros.shift();
console.log(primeiro);
console.log(numeros);

//meio
const meio = numeros.splice(3,4);
console.log(meio);