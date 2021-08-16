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