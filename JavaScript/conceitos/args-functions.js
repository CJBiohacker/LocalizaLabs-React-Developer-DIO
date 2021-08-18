// Método de declaração tradicional

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(5));                    // Retorna NaN.

// Adicionando uma "correção" para realizar a multiplicação. (Surge outro problema)

function multip(a, b) {
    b = b || 1;                                 // Aplica uma lógica booleana para b. Sendo 'b' = 'valor do parâmetro' OU '1'. Atendendo a condição da lógica retorna um true.
    return a * b;
}

console.log(multip(5, 0));                      // Perceba que b = 0, e no JavasCript o nº 0 equivale à 'false' booleano. Aplicando a lógica booleana dentro da função: b = b OU 1, b = 0 = false e 1 = true, resultando em b = true. Retornando 5 * true = 5.
console.log(5 * true);                          // Expressão equivalente ao resultado da lógica da função.


// "Correção" final e ajuste da função.

function multi(a, b) {
    b = typeof b === 'undefined' ? 1 : b;       // Uso de 'ternary if' que compara em 'igualdade estrita' o 'tipo de b' à 'undefined' e retorna 1 se forem iguais, senão retorna o valor inicial de 'b'.
    return a * b;
}
console.log(multi(5, 0));                       // Desta vez a multiplicação acontece por causa da "correção" da lógica.

// Atribuição de valor do parâmetro na declaração.

function soma(a, b = a) {
    return a + b;
}
console.log(soma(5))
// 'Lazy Evaluation'

function randomNumber() {
    return Math.random().toPrecision(2) * 10;
}

function sum(a, b = randomNumber()) {                               // Atribuição de uma função no valor de parâmetro.
    return console.log(`${a} + ${b} = ${a + b}`);
}

console.log(randomNumber());
sum(2);
