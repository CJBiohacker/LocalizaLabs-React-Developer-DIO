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

const string = "BBBBBBBBBBBBBAACCCDD";

const comparison = string.match();

String.fromCharCode(90)                     // Retorna as letras do alfabeto (A-Z), a partir de números ASCII. 

console.log();

for (let i = 65, j = 0; i <= 90, j < string.length; i++, j++) {            // Repetição de índice para Código ASCII e para posição de cada caractere do código em 'string'.

    let nChar = 0;

    if (String.fromCharCode(i) == string.charAt(j)) {
        nChar++;
        if (nChar++ < 10) {

        }
    } else {
    }

}

// CÓDIGO ASCII A--Z == 65--90 == U+0041--U+005A 



// CONTADOR DE CARACTERES
// ALTERAR A STRING ASSIM QUE HOUVER A TRANSIÇÃO DE CARACTERES
// UTILIZAR INCREMENTO PARA REPETIÇÃO DE CARACTERES
// CONCATENAR OS CARACTERES APÓS A CONTAGEM


// SNIPPET PRA EXCLUIR DO FILTRO UM VALOR ESPECIFICADO DA ARRAY. 
// const arrayString = Array.from(string);

// console.log(arrayString);

// const filterArray = (array, param) => {
//     let filterSpecs;

//     return filterSpecs = array.filter((element) => {
//         return element.indexOf(param);
//     });
// };

// console.log(filterArray(arrayString, 'B')); 