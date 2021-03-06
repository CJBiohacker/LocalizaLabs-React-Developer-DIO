// PROMISES NO JAVASCRIPT ES6
// PROMISES => Uma Promise representa um valor que pode não existir quando "promessa" é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Desta forma é possível que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

var valor = 1;
var erro = 0;

let promise = new Promise((resolve, reject) => {            // Construtor de 'Promise' para definir o estado de 'resolve' e 'reject' da promessa.
    resolve();
    reject();
});

promise.then(
    setTimeout(function (valor) {
        return console.log('Condição Resolvida = ' + true);
    }, 2000),
    setTimeout(function (erro) {
        return console.log('Condição Rejeitada = ' + false);
    }, 1500)
);
