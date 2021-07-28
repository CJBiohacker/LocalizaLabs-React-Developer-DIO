/* NUMBER */

// Declarando uma 'var' e atribuindo um número racional('float').
// O método 'toString' converte um objeto/valor em 'String'. O operador 'typeof' especifica o tipo da variável.
var number = 549.359;
const a = number.toString();

console.log(`Transformando o número ${number} em String : "${a}"`);
console.log(`Tipo da var 'number': ${typeof number}. Tipo da const 'a': ${typeof a}`);

// O método 'toFixed' retorna um 'Number' com arredondamento padrão do nº de casas decimais definida pelo usuário. 
const b = number.toFixed(1);

console.log(`Ajuste de uma casa decimal após a vírgula.\nSem ajuste: ${number}  Com ajuste: ${b}`);

// A função 'parseFloat' converte uma 'String' em 'Number float', e a 'parseInt' converte uma 'String' em 'Number int'.
const c = parseFloat('25.369');
const d = parseInt('666');

console.log(`String ==> Number float: ${c} Tipo da const 'c': ${typeof c}`);
console.log(`String ==> Number int: ${d} Tipo da const 'd': ${typeof d}`);







