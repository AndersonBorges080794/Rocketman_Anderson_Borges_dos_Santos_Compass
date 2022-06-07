import assert from 'assert';

/*As estruturas describe('', () => {}); e it('', ()=> {}) vem da dependência mocha.  */
describe('Meu primeiro teste', () => {
    
    it('Verifica uma igualdade', ()=> {

        let aux = 8;
        assert.strictEqual(aux, 8);

    });

    it('Verifica uma igualdade 2', ()=> {

        let aux = 'Anderson';
        assert.strictEqual(aux, 'Anderson');

    });

});

describe('Meu segundo teste', () => {
    
    it('Verifica uma desigualdade', ()=> {

        let aux = 8;
        assert.notStrictEqual(aux, '8');

    });

    it('Verifica uma desigualdade 2', ()=> {

        let aux = 'Anderson';
        assert.notStrictEqual(aux, 'Borges');

    });

});

