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
        height: 3.25
    },
    {
        name: "Leshen",
        class: monsterClass.R,
        height: 2.75
    }
]

// Método 'lenght' retorna a extensão(total) de itens de uma array.
console.log(`Array 'characters': ${characters.length} item(s)       Array 'monster': ${monsters.length} item(s)\n`);

// Método 'isArray' retorna um boolean para o valor inserido, sendo 'true' para Array ou 'false'  
console.log(`'characters' é uma Array?: ${Array.isArray(characters)}    'monsterClass' é uma Array?: ${Array.isArray(monsterClass)}\n`);

// Método 'forEach' realiza uma iteração entre os itens(elemento, índice ou array interna) de uma array.
console.log(`=> Lista de Personagens`);
characters.forEach(element => console.log(element));                                 // Aplicação do 'forEach' com arrow function pra chamar os elementos da array 'characters'.

console.log(`\n=> Lista de Monstros`);
monsters.forEach((element, index, array) => {
    console.log(`${index.toFixed()} - Criatura:${element.name}      Tipo: ${element.class.description}      Altura:${element.height}m`);
});

// Método 'filter' realiza um filtro definido pelo usuário da array.
const filterHeight = monsters.filter(monster => monster.height > 2);                 // Cria um filtro para a array 'monsters' que destaca os elementos com o parâmetro 'height'> 2.
console.log(`\n=> Monstros de grande porte(Altura > 2m)\n`, filterHeight);

// Método 'map' retorna um novo valor, especificado pelo usuário, para cada elemento ou parâmetro dentro de uma array.
const mapClass = monsters.map(classe => {
    classe.class = "Monstro";
    return classe;
})
console.log(`\n=> Reclassificação das Criaturas`, mapClass);

// Método 'reduce' executa uma determinada função, especificada pelo usuário, para cada elemento ou parâmetro da array, resultando em apenas um único valor de saída.
const reduceHeight = monsters.reduce((heightSum, monster) => {
    heightSum += monster.height;
    return heightSum;
}, 0);
console.log(`\n=> Somatório das alturas dos Monstros: ${reduceHeight}m`);

const reduceHeight2 = (heightSum, monster) => heightSum += monster.height;
console.log(`=> Somatório das alturas dos Monstros: ${monsters.reduce(reduceHeight2, 0)}m`);
