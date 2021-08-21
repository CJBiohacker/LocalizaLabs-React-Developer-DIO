// USO DE REST E SPREAD OPERATOR NO JAVASCRIPT ES6

// Uso da palavra reservada 'arguments' numa função.
function soma() {
    var valor = 0;

    for (let i = 0; i < arguments.length; i++) {
        valor += arguments[i];
    }

    return valor;
}

console.log(soma(5, 6, 9, 4, 2));

// Utilizando o Rest Operator numa função. ( ... )
