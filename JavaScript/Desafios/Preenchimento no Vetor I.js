let v = 1;                                      // Valor do 1º elemento do Vetor

const vector = new Array;                       // Construção de uma nova Array chamada 'vector'
const vectorAddV = vector.unshift(v);           // Adição do número atribuído à 'v' dentro de 'vector'

const output = () => {                          // Arrow Function 'output' contendo a lógica do desafio.
    for (let i = 0; i < 10; i++) {              // Loop 'for' que repete até o índice 9 de 'vector'.
        console.log(`N[${i}] = ${vector[i]}`);  // Imprime o índice e o valor do índice atual de 'vector';
        vector.push(vector[i] * 2);             // Adicionar um elemento no final de 'vector', sendo o dobro do valor anterior.
    }
}

output();                                       // Executa 'output'.