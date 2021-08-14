// CRIAÇÃO E MANIPULAÇÃO DE ARRAYS NO JAVASCRIPT ES6

// Método 'Array.of' -> Cria uma array a partir dos itens inseridos dentro dos parenteses.

const monsters = Array.of('Drowner', 'Leshen', 'Bruxa', 'Wraith', 'Nekker');
console.log(`-> Bestiário\n${monsters}`);

// Construtor de Classe/Objeto 'Array()' -> Cria uma array através do Construtor de Classe/Objeto de Array.
// Se for inserido apenas um número, identifica como o índice total da array.

const places = Array(3);
console.log(`-> Locais\n${places}`);

const weapons = Array("Espada", "Escudo", "Adaga")
console.log(`-> Armas\n${weapons}`);

// Método estático 'Array.from' -> Cria uma nova instância de array a partir de um parâmetro 'array-like' ou 'iterable-object'.

// const conjuntoDiv = document.querySelectorAll('div');             // Método DOM que retorna uma Nodelist de todas tags <div> encontradas numa página em html. Atribuído à constante 'conjuntoDiv'.
// const arrayDiv = Array.from(conjuntoDiv);                         // Criação da array 'arrayDiv' a partir da variável 'conjuntoDiv' como parâmetro. Ou seja, o método 'Array.from' "converte" a Nodelist, obtida antes, em elementos de array.

// Método 'push' -> Adiciona um elemento no final da array. 

function addNewPlaces() {
    places.push('Toussaint',
        'Vergen', 'Dol Blathanna',
        'Novigrad', 'Oxenfurt');
}

console.log(`-> Locais\n${places}`);
addNewPlaces();
console.log(`-> Locais\n${places}`);

// Método 'pop' -> Remove o último elemento da array. 

places.pop();                                                        // Remove o elemento 'Oxenfurt' da array 'places'.
console.log(`-> Locais\n${places}`);

// Método 'unshift' -> Adiciona um elemento no início da array.

places.unshift('XXX');
console.log(`-> Locais\n${places}`);

// Método 'shift' -> Remove o primeiro elemento da array.

places.shift(), places.shift(), places.shift(), places.shift();
console.log(`-> Locais\n${places}`);

// Método 'concat' -> Concatena os elementos de uma array com outra(s).

const placesWeapons = places.concat(weapons);
console.log(`-> Locais e Armas\n${placesWeapons}`);

// Método 'slice' -> Retorna a "fatia" de uma array de acordo com índice de início, ou início ao fim. (índice final não incluído)

console.log(`-> "Fatia" 1 (Início = índice 2)\n${placesWeapons.slice(2)}`);
console.log(`-> "Fatia" 2 (Início = índice 2, Fim = índice 5 )\n${placesWeapons.slice(2, 5)}`);
console.log(`-> "Fatia" 3 (Início = índice -3 ou 4 , Fim = índice -1 ou 6 )\n${placesWeapons.slice(-3, -1)}`);
console.log(`-> "Fatia" 3 (Início = índice  4 ou -3 , Fim = índice 6 ou -1 )\n${placesWeapons.slice(4, 6)}`);

// Método 'splice' -> Altera um array adicionando novos elementos enquanto remove elementos antigos. Seguindo a lógica de índice de início, nº de elementos deletados e elemento(s) adicionado(s).

console.log(`-> Locais e Armas\n${placesWeapons}`);

placesWeapons.splice(2);                                                // Alterou a array e removeu os elementos a partir do índice 2.
console.log(`-> 'Splice' de Locais e Armas\n${placesWeapons}`);

placesWeapons.splice(0, 0, 'Geralt');                                   // Alterou a array e retornou os elementos do índice 0 sem deletar outro elemento. Funcionou de forma semelhante ao método 'unshift'.
console.log(`-> 'Splice' de Locais e Armas\n${placesWeapons}`);

placesWeapons.splice(0, 1, 'Ciri', 'Vesemir');                          // Alterou a array e removeu o antigo elemento do índice 0 ('Geralt') e adicionando 2 novos elementos a partir desta posição ('Ciri' e 'Vesemir').
console.log(`-> 'Splice' de Locais e Armas\n${placesWeapons}`);





















// 'Geralt', 'Dandelion', 'Ciri', 'Triss', 'Yennefer', 'Eskel', 'Lambert', 'Vesemir'