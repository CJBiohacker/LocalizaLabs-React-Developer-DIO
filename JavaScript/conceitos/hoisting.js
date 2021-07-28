/* Scope e Block Statement */
/*  Scope ou Escopo é o termo que determina a visibilidade de uma variável dentro do JavaScript. Naturalmente o escopo padrão inclui todo o código, ou seja, é global. É possível criar o block-scope, que funciona como um escopo local dentro do global, onde também serão armazenados mais itens do código. Na Sintaxe o Block-Scope é representado por "{}", e tudo que conter dentro faz parte do escopo do bloco. */

//  Scope var (Ocorre o comportamento "hoisting" ou "içamento")

console.log("1 - Qual valor de x? " + x); {
    var x = 15;
}
console.log("2 - O valor de x é: " + x);

//  Scope let e const (Não ocorre o comportamento "hoisting" ou "içamento")

let y = 17      // Declara com a palavra-chave let a variável y com valor 17
console.log("3 - Qual valor de y? " + y);
{
    let y = 18;
    console.log("4 - O valor de y é: " + y); {
        console.log("5 - O valor de y é: " + y);
        y = 25;
        console.log("6 - O valor de y é: " + y);
    }
    console.log("7 - O valor de y é: " + y);
}
console.log("8 - O valor de y é: " + y);


const z = 33
console.log("9 - Qual valor de z? " + z); {
    const z = 37;
    console.log("10 - O valor de z é: " + z);
}
console.log("11 - O valor de z é: " + z);