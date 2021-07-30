/* OPERADORES NO JAVASCRIPT */
// Variáveis que serão utilizadas ao longo do código.
let n1 = 5;
let n2 = 5;
let n3 = 5;
let n4 = 5;
let n5 = 5;
let n6 = 5;
let n7 = 5;
let n8 = 7;

// Operador Unário é aquele que interage com apenas 1 operando. Ex.: Operador 'Increment (++)'.
// Increment (++) e Decrement (--).
var a = n1++;
var b = ++n2;
var c = n3--;
var d = --n4;

console.log(`${a}, ${b}, ${c}, ${d}`);
// Negation (-) e Addition(+).
var e = +n5;
var f = -n6;
var g = +true;      // +true = true = 1
var h = -false;     // !0 = 1
var i = -true;      // !1 = 0
var j = +false;     // +false = false = 0

console.log(`${e}, ${f}, ${g}, ${h}, ${i}, ${j}`);

// Exponenciação (**)
var k = n7 ** n7;   // (n7)= 5 => (5 ^ 5) = 5 x 5 x 5 x 5 x 5 = 3125
var l = n7 ** -1    // (5 ^ -1) => ( 1 / 5) = 0.2 

console.log(`${k}, ${l}`);

// Módulo (%)
var m = n8 % n7

console.log(`${m}`);

// Operador Binário é aquele que realiza a interação entre 2 operandos. Ex.: Operador 'Soma (+)', Multiplicação(*), etc.

