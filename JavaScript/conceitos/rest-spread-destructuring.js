// USO DE REST E SPREAD OPERATOR NO JAVASCRIPT ES6 (AVANÇADO)
// Uso da palavra reservada 'arguments' numa função.

function soma() {
    var valor = 0;

    for (let i = 0; i < arguments.length; i++) {            // Parâmetro 'arguments' sempre retorna os itens de um 'objeto'/'classe'.
        valor += arguments[i];
    }

    return valor;
}

console.log(soma(5, 6, 9, 4, 2) + '\n');

// Utilizando o Rest Operator numa função. ( ... )

const game = 'The Last of Us 2';
const person = ['Cabeça', "Braços", "Tronco", "Pernas"];

function separador(...parametro) {        // Função que recebe o Rest Operator junto de um parâmetro e imprime item por item.
    console.log(parametro);
}

separador(...game);                      // Separa caractere por caractere da string title.
separador(...person);                     // Imprime todos itens da array 'person'.

function arrayArgs(a, b, c) {             // Função que recebe o 3 variáveis/elementos e imprime elas.
    console.log(a, b, c);
}

arrayArgs(...person);                     // Imprime 3 caracteres do , sem separação ou colchetes.

// Utilizando o Spread Operator para concatenar itens de uma variável/objeto com outra/o.

const humano = [...person, "Consciência", "Inteligência", "Empatia"];               // Adiciona todos itens da array 'person' dentro da array 'humano'.
console.log('\n', humano);

const humano2 = [...humano];                                                        // Clone da array 'humano' com o Spread Operator.
console.log(humano2 + '\n');

// Atribuição via Desestruturação no JavaScript ES6.

var fireArms = ['Revolver', 'Pistol', 'Hunting Pistol', 'Flamethrower', 'Shotgun', 'Crossbow', 'Bow', 'Hunting Rifle'];

var shortRangeFireArms = [fireArms[0], fireArms[1], fireArms[2], fireArms[3], fireArms[4]];         // Adicionando por índice, as armas de curto alcance da array 'fireArms'.
var longRangeFireArms = [fireArms[5], fireArms[6], fireArms[7]];                                    // Adicionando por índice, as armas de long alcance da array 'fireArms'.

var [shortRange, longRange] = [fireArms.slice(0, 5), fireArms.slice(5)];                            // Atribuição pelo modo de Desestruturação. Para reduzir a linha de código, utilizamos o método slice para arrays.

console.log(`Variável shortRangeFireArms => ${shortRangeFireArms}`);
console.log(`Variável shortRange => ${shortRange}`);

