// Currying no JavaScript.
// Abaixo temos uma declaração comum de 'Function'. Uma multiplicação entre duas variáveis e um 'impressão' no console especificando o valor de ambas variáveis (a=2 e b=3).
function multi(c, d) {
    return c * d;
}

console.log(multi(2, 3));

// Neste caso temos a técnica do "Currying", que é utilizada quando declaramos uma função dentro de outra. Pra evitar de ter de repetir a atribuição de valor de uma variável/constante da função que é fixa, declaramos uma variável/constante e atribuímos o nome da 'Function Pai' com esse valor especificado apenas uma vez e chamamos esta variável/constante na hora de executá-la, e apenas teremos que especificar o valor da 'Function filha'.
function somar(a) {             // Function Pai(a)
    return function (b) {       // Retorno da Function Pai = Function Filha(b)
        return a + b;           // Retorno da Function Filha = a + b
    }
}

const soma = somar(2);          // Declaração de const soma = Function Pai(a=2) ==> return 2 + b. 

console.log(soma(2));           // Impressão no console da const soma(b=2) ==> return 2 + 2 
console.log(soma(3));           // Impressão no console da const soma(b=3) ==> return 2 + 3 
console.log(soma(4));           // Impressão no console da const soma(b=4) ==> return 2 + 4 
