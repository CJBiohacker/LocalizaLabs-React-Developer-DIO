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
