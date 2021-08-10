const user = {
    nome: 'Carlos',
    sobreNome: 'de Lima Junior'
};

function getUserFullName() {
    return {
        ...user, nomeCompleto: `${user.nome} ${user.sobreNome}`
    }
};

const fullName = getUserFullName();

console.log(fullName);

// Uso do Spread Operador ou Spread Syntax '...'. É utilizado quando é necessário copiar os itens de uma array, sem ter de modificá-la.

let monstros = ["Ogro", "Goblin", "Hydra", "Dragão", "Ímpio"]       // Declaração da Array 'monstros' e atribuição de strings.
let criaturas = ["Humano", ...monstros, "Vampiro", "Elfo"]          // Declaração da Array 'criaturas' e atribuição de strings + uso do Spread Operator para copiar todos elementos de 'monstros'.

console.log(criaturas);
console.log(criaturas.join(' - ').toString())