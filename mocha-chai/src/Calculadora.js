export default class Calculadora{

    static soma(a, b) {
        
        return a + b;
    }

    static porcentagem(valor1, valor2){

        let result = (valor1 * valor2) / 100;

        return result;
    }

    static subtracao(valor1, valor2){

        let result = valor1 - valor2;

        return result;
    }

    static potencia(valor){

        let result = valor **2

        return result;
    }

    static mult(valor1, valor2){

        let result = valor1 * valor2;

        return result;
    }

    static div(valor){
        let result = valor / 2

        return result;
    }

};