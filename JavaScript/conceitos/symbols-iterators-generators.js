// SYMBOLS E ITERATORS NO JAVASCRIPT ES6.

// Symbol é tipo de dado primitivo no JavaScript e surgiu na versão ES6.
const uniqueID = Symbol("Isto é um Symbol.");       // Declaração de um Symbol.

console.log(uniqueID);

const array = [1, 2, 3, 4];
const strings = 'Symbols e Iterators no JS';
const array2 = [...array, ...strings];
const iterador = array[Symbol.iterator]();          // Método de iteração de um Symbol, semelhante ao 'for...of...'.

console.log("\nMétodo 'Iterator' de um Symbol");
for (let i = 0; i < array.length; i++) {            // Estrutura de Repetição para iteração e impressão de cada valor da array como Symbol.
    console.log(iterador.next());
}

console.log("\nEstrutura de Repetição 'For...of...' para repetição dos elementos da 'array'");
for (let element of array) {                        // Estrutura de Repetição dos elementos da array.
    console.log(element);
}

console.log("\nEstrutura de Repetição 'For...of...' para repetição dos elementos da 'array2'");
for (const element of array2) {
    console.log(element);
}

// GENERATORS NO JAVASCRIPT ES6.
/* 'Generator' ou 'Generator Function' é um tipo de função que pode ter a execução interrompida e posteriormente reconduzida, mantendo todo contexto, variáveis associadas e modificações salvas entre cada recondução. 
Na sintaxe, é representando por um '*' após a palavra-chave 'function' ou antes de métodos criados pelo DEV.
A interrupção do generator ocorre através da palavra-chave 'yield'.*/

function* naturalNumbers() {
    let number = 0
    while (true) {
        yield number;
        number++;
    }
}

const generator = naturalNumbers();

for (let i = 0; i < 10; i++) {
    console.log(generator.next());
}
