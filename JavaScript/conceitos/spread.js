// Uso do Spread Operador ou Spread Syntax '...'. É utilizado quando é necessário copiar os itens de uma array, sem ter de modificá-la.

let monstros = ["Ogro", "Goblin", "Hydra", "Dragão", "Ímpio"]       // Declaração da Array 'monstros' e atribuição de strings.
let criaturas = ["Humano", ...monstros, "Vampiro", "Elfo"]          // Declaração da Array 'criaturas' e atribuição de strings + uso do Spread Operator para copiar todos elementos de 'monstros'.

console.log(criaturas);
console.log(criaturas.join(' - ').toString())

// SEM USO DO SPREAD OPERATOR
var classes = ['Warrior', 'Rogue', 'Mage', 'Priest'];
var attributes = ['Strenght', 'Agility', 'Intelligence', 'Stamina', 'Faith'];

var warMainAtb = [classes[0], attributes[0], attributes[3]];

console.log(warMainAtb);

// COM USO DO SPREAD OPERATOR '...'
var dmgAttributes = ['Damage', 'Hit Chance', 'Crit Chance', 'Crit Damage'];
var specAttributes = [...dmgAttributes, 'Range Damage', 'Expertise', 'Armor', 'Magic Armor']

console.log(specAttributes);

// CRIANDO FUNÇÕES DE CORRELAÇÃO ENTRE VALORES E PROPRIEDADES.
function correlation(x, y, z) {
    console.log(elementos);
}

var elementos = [0, 1, 2];

correlation(...elementos);

