// FUNÇÕES ASSÍNCRONAS NO JAVASCRIPT
// As funções assíncronas podem ser declaradas através dos comandos 'Async/Await'.

const asyncPromise = () => new Promise((resolve, reject) => {           // Cria uma constante e atribui à um construtor de 'Promise'. 
    setTimeout(() => {                                                  // A 'Promise' leva uma função contadora de 1,5seg retornando uma sequencia de strings em sua condição 'resolve'.
        resolve("Função assíncrona de teste !")
    }, 1500);
});

const funcaoTeste = async () => {                                       // Constante com atribuição de uma 'Arrow Function' assíncrona.
    const data = await asyncPromise();                                  // Declaração de uma constante com atribuição à 'Promise' criada anteriormente. Esta vem precedida do comando 'await', que aguarda a resolução da 'Promise' pra depois resumir o resto do código.
    return data;
};

funcaoTeste().then(data => {                                            // Execução dos casos 'resolve/reject' da 'Promise'.
    console.log(data);
}).catch(error => {
    console.log(error);
});
