// Criação de uma classe para exportação pro teste TDD Mocha no documento 'math.spec.js'.

class Math {
    soma(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }), 2500;
    };
    multip(a, b, callback) {
        setTimeout(() => {
            callback(a * b);
        }), 2500;
    };
    div(a, b, callback) {
        setTimeout(() => {
            callback(a / b);
        }), 2500;
    };
};

module.exports = Math;

