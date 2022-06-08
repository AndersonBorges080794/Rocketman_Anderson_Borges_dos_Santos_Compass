import assert from 'assert';
import chai from 'chai';
import Calculadora from '../src/Calculadora.js';

const expect = chai.expect;

describe('Teste na class Calculadora', () => {
    describe('Teste de soma', () => {
    
        it('Soma 4 e 5 e o resultado deve ser 9', () => {
    
            let result = Calculadora.soma(4,5); 
    
            expect(result).to.be.equal(9);
        });

    });
    
    describe('Teste de porcentagem', () => {
        it('10% de 300 deve ter o resultado 30 ', () =>{
    
            let result = Calculadora.porcentagem(10, 300);
    
            expect(result).to.be.equal(30);
        });
    });

    describe('Teste de subtração', () => {
        it('5 menos 4 deve ter o resultado 1 ', () =>{
    
            let result = Calculadora.subtracao(5, 4);
    
            expect(result).to.be.equal(1);
        });
    });

    describe('Teste de potência', () => {
        it('potencia de 2 resultado 4 ', () =>{
    
            let result = Calculadora.potencia(2);
    
            expect(result).to.be.equal(4);
        });
    });

    describe('Teste de multiplicação', () => {
        it('multiplicação de 10x10 resultado 100', () =>{
    
            let result = Calculadora.mult(10, 10);
    
            expect(result).to.be.equal(100);
        });
    });

    describe('Teste de divisão', () => {
        it('divisão de 16/2 resultado 8', () =>{
    
            let result = Calculadora.div(16);
    
            expect(result).to.be.equal(8);
        });
    });

});


