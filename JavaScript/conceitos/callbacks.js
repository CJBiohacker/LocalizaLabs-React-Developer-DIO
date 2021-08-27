// CALLBACK NO JAVASCRIPT ES6
// CALLBACK => é uma quando função é passada como argumento de outra função.

function divisao(a, b) {                                // Função de Divisão entre 'a' e 'b'.
    return console.log(`Divisão: ${a / b}`);
}

function multiplic(a, b) {                              // Função de Multiplicação entre 'a' e 'b'. 
    return console.log(`Multiplicação: ${a / b}`);
}

function calcular(callback) {                           // Função Callback que recebe os valores de 'a' e 'b'.
    let a = prompt('Digite o valor de "a"');       // Comando 'prompt' abre uma janela no navegador para entrada de informação.
    let b = prompt('Digite o valor de "b"');
    return callback(a, b);                              // Retorna o argumento da função com os valores de 'a' e 'b'.
}

calcular(divisao);          // Função passada como argumento para a função calcular. Os valores especificados de 'a' e 'b' viram o novo argumento da função 'divisao'.
calcular(multiplic);        // Função passada como argumento para a função calcular. Os valores especificados de 'a' e 'b' viram o novo argumento da função 'multiplic'.