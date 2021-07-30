/* FUNÇÕES NO JAVASCRIPT */
// Sintaxe padrão de declaração de funções no JavaScript.
function testeInt(nota) {
    return console.log(`Nota do Teste: ${parseInt(nota)}`);
}
testeInt(7);

// Sintaxe da versão ES6 de declaração de funções no JavaScript. 'Arrow Function(=>)'
const teste = () => console.log("Testando 1..2..3..");                  // Arrow Function criada como 'const', sem parâmetro definido, método minimalista.
const testeFloat = (nota) => {                                          // Arrow Function criada como 'const', com parâmetro definido, método padrão.
    return console.log(`Nota do Teste: ${parseFloat(nota)}\n`);
};

teste();
testeFloat(9.25);

// Chamado de métodos criados dentro de funções em escopo de bloco.
(() => {
    this.name = "Arrow Function String";        // Método 'this.name' que retorna uma cadeia de `String's` 
    const returnArwFunc = () => this.name;      // Função criada como 'const' dentro do escopo de bloco.

    function getName() {                            // Criação de uma função no estilo tradicional, que retorna o método 'this.name'.
        return this.name;
    }

    const user = {                                  // Criação do objeto 'user'
        name: `Parâmetro => Nome do Objeto`,
        returnArwFunc,                              // Propriedade que retorna a função 'returnArwFunc' criada na Arrow Function vazia acima.ia acima.
        getName                                     // Propriedade que retorna o método 'this.name' criado na função tradicional 'getName()'.
    }

    console.log(`${user.returnArwFunc()}`)            // Aqui ocorre a chamada do método 'this.name' no contexto original = `Arrow Function String`
    console.log(`${user.getName()}`)                  // Aqui ocorre a chamada do método 'this.name' dentro da função getName(), que retorna o parâmetro 'name' de dentro do objeto 'user'. 
})();


// Funções e Arrays são tratados como objetos no JavaScript. É possível adicionar propriedades nas funções.
teste.prop = console.log("\nPropriedade adicional");

teste();



