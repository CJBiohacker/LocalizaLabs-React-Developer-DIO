const getRandomInt = () => {                            // Arrow Function que gera um nº aleatório de 0 até um valor máximo 'max' definido pelo usuário.
    return Math.floor(Math.random() * 45);              // O método 'Math.floor()' arredonda qualquer 'Number float' que possa sair da operação.
};

const fib = (n) => {

    if (n === 1) {                                      // Se não atender a situação anterior, passa para uma nova condicional de 'n === 1'.

        const fibSeq = [0];                             // Cria uma array 'fibSeq' com o valor inicial '0'.

        console.log(fibSeq.join(' '));                  // Imprime a sequência com separação por espaço ao invés da vírgula padrão.        

    } else if (n > 1 && n < 46) {                       // Se não atender a situação anterior, passa para uma nova condicional de 'n > 1'.
        const fibSeq = [0, 1];

        for (let i = 0; i < (n - 2); i++) {
            fibSeq.push(fibSeq[fibSeq.length - 1]
                + fibSeq[fibSeq.length - 2]);
        }

        console.log(fibSeq.join(' '));

    }
};

fib(getRandomInt());                                    // Chamada da função com o valor definido
