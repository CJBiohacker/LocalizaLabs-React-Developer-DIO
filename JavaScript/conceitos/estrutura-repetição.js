// ESTRUTURAS CONDICIONAIS NO JAVASCRIPT

// Declaração de variáveis e constantes que serão utilizadas no código.

const factions = ['Seraphites', 'WLF', 'Fireflies', 'Rattlers', "Jackson's"];
var ammo = 0;
var counter = 90;
var numbers = [1, 2, 5];

numbers.newProp = "Caractere";

// Estrutura de Repetição For... (Utilizado para repetição simples/contagem de elementos)

console.log(`FOR...`);
for (let i = 0; i < factions.length; i++) {
    console.log(`- ${factions[i]}`);
}

// Estrutura de Repetição While... (Utilizado para repetição simples/contagem de elementos. Nesta estrutura a condição é verificada antes de executar a repetição.)

console.log(`\nWHILE...`);
while (ammo < counter) {
    console.log(`Você têm ${ammo} munições.`);
    ammo = ammo + 30;
    if (ammo < counter) {
        console.log(`Tome mais 30.`);
    } else {
        console.log(`Tome mais 30 munições.
Agora você tem ${ammo} e sua mochila está cheia.`);
    };
}

// Estrutura de Repetição DO...While (Utilizado para repetição simples/contagem de elementos. Nesta estrutura a condição é verificada após a execução da repetição.)

ammo = 0;

console.log(`\nDO...WHILE`);
do {
    console.log(`Você têm ${ammo} munições.`);
    ammo = ammo + 30;
    console.log(`Tome mais 30.`);
} while (ammo < counter);

console.log(`Agora você tem ${ammo} e sua mochila está cheia.`);

// Estrutura de Repetição For in... (Utilizado para repetição especificada dos índices ou propriedades criadas de uma Array/Objeto)

console.log(`FOR IN...`);

for (let index in numbers) {    // Repetição dos ÍNDICES da Array e de qualquer MÉTODO criado pelo usuário.
    console.log(index);
}

// Estrutura de Repetição For of... (Utilizado para repetição especificada de elementos dentro de uma Array/Objeto)

console.log(`FOR OUT...`);

for (let element of numbers) {    // Repetição dos ELEMENTOS da Array.
    console.log(element);
}
console.log(`Imprimindo a propriedade numbers.newProp: ${numbers.newProp}`);