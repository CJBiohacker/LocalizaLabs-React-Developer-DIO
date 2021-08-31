// BLOCOS TRY...CATCH PARA IDENTIFICAÇÃO DE ERROS NO JAVASCRIPT
// Quando um erro ocorre durante a execução de um código no JS, ele interrompe a leitura do resto do código a partir do momento do erro. Para isso utilizamos o bloco 'try/catch', onde é testado uma ou mais declarações com o 'try', e ao menos uma cláusula 'catch', 'finally' ou ambas. Quando não há êxito nos testes o "controle" é passado para o bloco 'catch' onde ocorre um ou mais "capturas" do erro. Após os 2 blocos, vem a cláusula 'finally' que é sempre executada, independente se uma exceção for "lançada" ou "capturada".

{
    try {                                                   // Abertura do bloco 'try'.
        console.log(nome);
        const nome = "Carlos Junior";                       // Tentativa de impressão de uma variável não declarada.(Situação prevista de erro)
    } catch (erro) {                                        // Por ter falhado no bloco 'try', o controle é passado para o bloco 'catch'. Na prática, a especificação do erro.
        console.log(`${erro}`);
    } finally {
        console.log(`Parabéns, você descobriu o erro ! Continue programando...\n`);
    }
};

// Outro exemplo, utilizando 'try...catch' em conjunto com a declaração 'throw' para "lançar" uma "exceção" especificada por uma expressão.

try {
    const nome = "Carlos Junior";
    const meuErro = new Error(`Mensagem de erro customizada "lançada".`);          // Utilizando um construtor da classe 'Error' pra criar uma mensagem de erro customizada.

    throw meuErro;                                              // Exceção "lançada".
} catch (erro) {
    console.log(`${erro}`);
} finally {
    console.log(`Parabéns, você descobriu o erro ! Continue programando...`);
}

