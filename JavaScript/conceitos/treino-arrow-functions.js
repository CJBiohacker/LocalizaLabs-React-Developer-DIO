// Métodos de Declaração de Arrow Functions no JavaScript (ES6)
(a, b) => a + b;                                                            // Declaração simples de Arrow Function;

var soma = (a, b) => a + b;                                                 // Atribuição à variável 'soma'.

console.log(`${soma(5, 3)}`);
console.log(soma(5, 3));

var logicaNot = a => !a;                                                    // 1 Parâmetro não necessita de parenteses.
var logicaAnd = (a, b) => a && b;                                           // Mais de 1 parâmetro, o parenteses é obrigatório.

console.log(`Lógica Not\n!0 = ${logicaNot(0)}`);                            // '0 negado' = 'false negado' = true  
console.log(`Lógica Not\n!1 = ${logicaNot(1)}`);                            // '1 negado' = 'true negado' = false

var monster = () => ({ tipo: 'Specter', nome: 'Banshee' });                 // Arrow Function sem parâmetro que retorna um objeto e atribuída à uma variável. Por existir um objeto, é necessário os parenteses.
console.log(monster());

var banshee = {                                                             // Objeto com atributos com valores preenchidos por funções.
    tipo: function Specter() {
        console.log('Tipo: Specter');
        console.log('decidindo...');
        setTimeout(() => {                                                  // Aplicação de uma Arrow Function para reduzir a 'poluição' e tamanho do código.
            console.log('Ataque: Golpe Espiritual');                        // Esta função conta 2 segundos e imprime no console a 'string'.
        }, 2000);
    },
    nome: function Banshee(valor) {
        console.log(`Nome: ${valor}`);
    }
};

console.log('\n--Monstro--');
banshee.nome('Banshee');
banshee.tipo();                                                             // Ao chamada o atributo 'tipo', o JavaScript executa a função 'Specter'. No 1º escopo ele imprime no console as 2 linhas de 'string' e depois executa a função método 'setTimeout', contando 2 segundos e imprimindo outra 'string'.