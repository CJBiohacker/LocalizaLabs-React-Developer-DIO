const getRandomInt = (max) => {                           // Arrow Function que gera um nº aleatório de 0 até um valor máximo 'max' definido pelo usuário.
    return Math.floor(Math.random() * max);               // O método 'Math.floor()' arredonda qualquer 'Number float' que possa sair da operação.
};

const fib = (n) => {                                      // Arrow Function que recebe um valor 'n' que será a quantidade de números da sequência de fibonnaci.

    if (n >= 46) {                                        // Condicional de 'n >= 46'.
        let n = getRandomInt(45);                         // Gera um nº aleatório de 0 à 45.

        const fibSeq = [0, 1];                            // Estando dentro da condição, ele cria uma array 'fibSeq' com os 2 valores mínimos inicias para existir a sequência.

        for (let i = 0; i < (n - 2); i++) {               // Estrutura de Repetição 'for' que tem seu iterador 'i' repetindo de 1 em 1 até ser menor que 'n-2'. (n-2 porque corrige a contagem excluindo os 2 elementos iniciais criados na linha anterior) 
            fibSeq.push(fibSeq[fibSeq.length - 1]
                + fibSeq[fibSeq.length - 2]);             // Lógica aritmética para adicionar um elemento no final da array, baseado na soma dos 2 últimos elementos atuais.
        }

        console.log(fibSeq.join(' '));                    // Imprime a sequência com separação por espaço ao invés da vírgula padrão.        

    } else if (n > 1) {                                   // Se não atender a situação anterior, passa para uma nova condicional de 'n > 1'.
        const fibSeq = [0, 1];

        for (let i = 0; i < (n - 2); i++) {
            fibSeq.push(fibSeq[fibSeq.length - 1]
                + fibSeq[fibSeq.length - 2]);
        }

        console.log(fibSeq.join(' '));

    } else if (n === 1) {                                 // Se não atender a situação anterior, passa para uma nova condicional de 'n === 1'.

        const fibSeq = [0];

        console.log(fibSeq);

    } else if (n <= 0) {                                  // Se não atender a situação anterior, passa para uma nova condicional de 'n <= 0'.

        let n = getRandomInt(45);

        const fibSeq = [0, 1];

        for (let i = 0; i < (n - 2); i++) {
            fibSeq.push(fibSeq[fibSeq.length - 1]
                + fibSeq[fibSeq.length - 2]);
        }

        console.log(fibSeq.join(' '));

    }
};

fib(50);                                                  // Chamada da função com o valor definido