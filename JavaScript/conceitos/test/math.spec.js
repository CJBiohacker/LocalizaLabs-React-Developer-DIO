// TDD MOCHA DE EXEMPLO NO JAVASCRIPT

const assert = require('assert');
const Math = require('./math.js');

const math = new Math();

describe('Classe Math', function () {

    beforeEach(function () {                            // Hook utilizado para repetição do algarismo 5 durante todos testes.
        var num = 0;
    });

    it('Soma 2 números', function (done) {
        num = 5
        math.soma(num, 5, valor => {
            assert.equal(valor, 12);
            done();
        });
    });
    it('Multiplica 2 números', function (done) {
        num = 5
        math.multip(num, 9, valor => {
            assert.equal(valor, 45);
            done();
        });
    });
    it.skip('Divide 2 números', function (done) {
        num = 5
        math.div(10, num, valor => {
            assert.equal(valor, 2);
            done();
        });
    });
});

// OBS.: EVITAR UTILIZAR ARROW FUNCTION AO REALIZAR TESTES DO 'MOCHA', PARA EVITAR CONFLITOS E DESPERDÍCIO DE RECURSOS DURANTE O TESTE.