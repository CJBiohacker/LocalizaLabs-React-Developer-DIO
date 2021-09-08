// const input = gets();

const fib = (n) => {                                // Arrow Function que recebe um valor 'n' que será a quantidade de números da sequência de fibonnaci.
    if (0 < n < 46) {                               // Condicional com regra definida. 'n' é um número entre 0 e 46.
        const fibSeq = [0, 1];                      // Estando dentro da condição, ele cria uma array 'fibSeq' com os 2 valores mínimos inicias para existir a sequência.

        for (let i = 0; i < (n - 2); i++) {         // Estrutura de Repetição 'for' que tem seu iterador 'i' repetindo de 1 em 1 até ser menor que 'n-2'. (n-2 porque corrige a contagem excluindo os 2 elementos iniciais criados na linha anterior) 
            fibSeq.push(fibSeq[fibSeq.length - 1]
                + fibSeq[fibSeq.length - 2]);       // Lógica aritmética para adicionar um elemento no final da array, baseado na soma dos 2 últimos elementos atuais.
        }
        console.log(fibSeq.join(' '));              // Imprime a sequência com separação por espaço ao invés da vírgula padrão.
    }
};

fib(10);                                            // Chamada da função com o valor definido