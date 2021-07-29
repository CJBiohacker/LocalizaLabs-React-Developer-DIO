/* ARRAYS NO JAVASCRIPT*/
// Criação de uma Array com elementos preenchidos por "string's".
const characters = ["Geralt", "Yennefer", "Ciri", "Triss", "Iorveth", "Vesemir"]

// Criação de um objeto com parâmetros preenchidos com dados do tipo 'Symbol'.
const monsterClass = {
    B: Symbol('Beast'),
    C: Symbol('Cursed One'),
    D: Symbol('Draconid'),
    E: Symbol('Elementa'),
    H: Symbol('Hybrids'),
    I: Symbol('Insectoid'),
    N: Symbol('Necrophage'),
    O: Symbol('Ogroid'),
    R: Symbol('Relict'),
    S: Symbol('Specter'),
    V: Symbol('Vampire')
}

// Criação de uma Array com elementos preenchidos por objetos com 3 parâmetros. Sendo o parâmetro 'class', atribuído à algum item do objeto 'monsterClass'.
const monsters = [
    {
        name: "Drowner",
        class: monsterClass.N,
        height: 1.85
    },
    {
        name: "Cockatrice",
        class: monsterClass.D,
        height: 2.95
    },
    {
        name: "Leshen",
        class: monsterClass.R,
        height: 1.85
    }
]

// Método 'lenght' retorna a extensão(total) de itens de uma array.
console.log(`Array 'characters': ${characters.length} item(s)       Array 'monster': ${monsters.length} item(s)\n`);

// Método 'isArray' retorna um boolean para o valor inserido, sendo 'true' para Array ou 'false'  
console.log(`'characters' é uma Array?: ${Array.isArray(characters)}    'monsterClass' é uma Array?: ${Array.isArray(monsterClass)}\n`);

// Método 'forEach' realiza uma iteração entre os itens(elemento, índice ou array interna) de uma array.
console.log(`=> Lista de Personagens`);
characters.forEach(element => console.log(element));

console.log(`\n=> Lista de Monstros`);
monsters.forEach((element, index, array) => {
    console.log(`${index.toFixed()} - Criatura:${element.name}      Tipo: ${element.class.description}`);
});

