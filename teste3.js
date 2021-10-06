/* CODIFICADOR DE CARACTERES
MONTAR UMA FUNÇÃO QUE RECEBA STRING E CONVERTA NA CODIFICAÇÃO ESPECIFICADA

RECEBER STRINGS DE LETRAS
ex.: AAA  =>  3A    AABBB => 2A3B

CONDIÇÃO ESPECÍFICA:
A CADA 10 OU MAIS REPETIÇÕES, OCORRE UM AGRUPAMENTO DO CARACTERE.
ex.: AAAAAAAAAAAAAAA => 9A6A (9 A + 6 A)   
CCCCCCCCCCCCCCCCCCCCCCCCC => 9C9C

ENTRADA
'BBBBBBBBBBBBBAACCCDD'

SAÍDA ESPERADA
'9B4B2A3C2D'
*/

const string = `BBBBBBBBBBBBBAACCCDD`;
const arrayString = Array.from(string);

const filterArray = (array, param) => {
    let filterSpecs;

    return filterSpecs = array.filter((element) => {
        return element.indexOf(param);
    });
};

console.log(filterArray(arrayString, 'B'));


// CONTADOR DE CARACTERES
// ALTERAR A STRING ASSIM QUE HOUVER A TRANSIÇÃO DE CARACTERES
// UTILIZAR INCREMENTO PARA REPETIÇÃO DE CARACTERES
// CONCATENAR OS CARACTERES APÓS A CONTAGEM