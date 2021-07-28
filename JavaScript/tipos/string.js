/* STRING */

// Declaração de uma 'constante' atribuída à um dado do tipo 'string'.
// Imprime no console a quantidade de caracteres da variável 'a'.
const a = "Texto de teste para exemplificar os métodos.";
console.log(`Quantidade de caracteres em '${a}': ${a.length}\n`);

// Declaração de uma variável 'var' atribuída à variável anterior 'a' com o método 'split()'.
// Imprime no console a variável. O método 'split' retorna uma string como Array, separando os elementos de acordo com o parâmetro definido pelo usuário.
var b = a.split('');
var b1 = a.split('x');
var b2 = a.split(' ');
var b3 = a.split('e');
var b4 = a.split('e ');

console.log(`--------MÉTODO SPLIT--------`);
console.log(`Separação por caractere: [${b}].`);
console.log(`Separação por cada caractere 'x': [${b1}].`);
console.log(`Separação por espaçamento entre caracteres: ${b2}`);
console.log(`Separação por cada caractere 'e': [${b3}].`);
console.log(`Separação por cada caractere 'e ': [${b4}].\n`);

// Declaração de uma variável 'let' (variável de bloco de escopo local) atribuída à um dado do tipo 'string' com o método 'replace'.
// Imprime no console a variável. O método 'replace' substitui o texto original por outro definido pelo usuário.
let c = a.replace('exemplificar', 'explanar');
let regexp = /(os)/;    // Utilizando 'Expressões regulares' para atribuição de caracteres á uma variável 'let'.
let c1 = a.replace(regexp, 'Ø');

console.log(`--------MÉTODO REPLACE--------`);
console.log(`Substituição da palavra exemplificar por explanar: '${c}'`);
console.log(`Substituição da palavra exemplificar por explanar: '${c1}'\n`);

// O método 'slice' retorna uma "fatia" da 'String' ou 'Array' definido por um ponto de 'início'(a partir de) e/ou 'fim'(antes de). OBS.:Sempre excluí o 'fim', quando definido.
const d = a.slice(9);
const d1 = a.slice(9, 32);
const d2 = a.slice(9, -9);  // N° negativo define a contagem em sentido reverso, mantendo a mesma regra (fim = antes de).

console.log(`--------MÉTODO SLICE--------`);
console.log(`'Fatiando' o texto da palavra 'teste' em diante: '${d}'`);
console.log(`'Fatiando' o texto da palavra 'teste' até 'exemplificar': '${d1}'`);
console.log(`'Fatiando' o texto da palavra 'teste' até 'os': '${d2}'\n`);

// O método 'substr' retorna uma porção da 'String' definido por um ponto de início(a partir de) e/ou extensão (até o). OBS.:Sempre inclui a 'extensão', quando definido.
var e = a.substr(14);
var e1 = a.substr(14, -11); // Para 'EXTENSÃO', o método 'substr' trata nº 'negativo' e 'NaN' como '0' 
var e2 = a.substr(14, 31);
var e3 = a.substr(-39, 2);  // Para 'INÍCIO', o método 'substr' aceita nº 'negativo'.

console.log(`--------MÉTODO SUBSTR--------`);
console.log(`Retorna a porção do texto a partir de 'para' até o final: '${e}'`);
console.log(`Especifique os parâmetros corretamente: '${e1}'`);
console.log(`Retorna a porção do texto a partir de 'para' até '': '${e2}'`);
console.log(`Retorna a porção do texto a partir de 'para' até '': '${e3}'`);



