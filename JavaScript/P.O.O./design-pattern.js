// Conceito de Design Pattern no JavaScript
/* 'Pattern' é uma solução reutilizável que pode ser aplicada em problemas de ocorrência frequente em design de Software na hora de 'escrever' aplicações da web em JavaScript. Outra forma de visualizar os 'Patterns', é como um conjunto de 'templates' de como nós resolvermos problemas. Então, 'Design Pattern' é o conceito de criar/desenvolver soluções próprias, dentro das regras de sintaxe do JavaScript, para resolução de problemas comuns.
Existem algumas 'Patterns' já criadas, que são as mais utilizadas, que são:
    - FACTORY;
    - SINGLETON;
    - DECORATOR;
    - OBSERVER;
    - MODULE.
*/
// FACTORY - Pattern que representa todas as funções que retornam um objeto sem a necessidade de construí-las com o operador 'new'.

console.log('DESIGN PATTERN - FACTORY');

function Magic() {                              // Função sem parâmetro, com 2 métodos com string pré-definidas.
    this.formato = 'Seta';
    this.magia = 'Fogo';
    return this.formato + this.magia;
}

const fireBolt = new Magic();               // Exemplo de Função que não é 'FACTORY', pois possui um construtor 'new' atribuindo a função à constante 'fireBolt'. 
console.log(fireBolt);                      // Resultado = 'Magic { formato: 'Seta', magia: 'Fogo' }'

function HealingMagic() {
    this.tipo = 'Cura'
    this.entidade = ' dos Espíritos'
    return this.tipo + this.entidade;
}

const heal = HealingMagic();                // Função 'FACTORY', não possui um construtor e puxa o resultado direto da função à variável.
console.log(heal);                          // Resultado = 'Cura dos Espíritos'

// SINGLETON  - Pattern que tem como objetivo criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.

function Mutant() {
    if (!Mutant.instance) {                                 // Criando a condicional 'If' para caso não exista a instância/método do função, ela retorna da mesma forma.
        Mutant.instance = this;
    }

    return Mutant.instance;
}

const mutanteNome = Mutant.call({ nome: 'Geralt' });            // Criando uma constante e atribuindo a ela uma uma propriedade através do método 'call'. Este método, chama um método de um Objeto/Classe e substitui por outro.
const mustanteClasse = Mutant.call({ classe: 'Witcher' });

console.log('\nDESIGN PATTERN - SINGLETON');
console.log('Mutante:', mutanteNome, mustanteClasse);

// DECORATOR - Pattern que permite que uma função receba uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

let loggedIn = false;

function callIfAuth(fn) {                   // Função que simula uma autenticação de usuário baseada numa operação lógica 'AND' entre uma variável booleana pré-definida e a função 'fn()' que receberá outra função como parâmetro.
    return !!loggedIn && fn();              // Se ambas forem 'true', a função retorna o valor de fn().
}

soma = (a, b) => {                              // Arrow Function que realiza uma soma entre 2 variáveis. Ela será utilizada para caracterizar o Pattern Decorator, ou seja, será a função recebida como parâmetro sem modificação explicíta.
    return a + b;
}

console.log('\nDESIGN PATTERN - DECORATOR');
console.log(`User Logged In Sum Status: ${callIfAuth(() => soma(6, 9))}`);     // Recebe a função 'soma' como parâmetro da função 'callIfAuth'. Como 'loggedIn' é false, ele retorna o parâmetro como false.

loggedIn = true;                                                    // Modificando a variável boolean para true.
console.log(`User Logged In Sum Status: ${callIfAuth(() => soma(6, 9))}`);     // Como 'loggedIn' é true, ele retorna o parâmetro como o valor da função soma.

// OBSERVER - Pattern que permite  que uma instância("Inscrito") mantenha uma coleção de objetos("observadores") e notifica todos eles quando ocorrem mudanças no estado.(Uma aviso de notificação)

class Observado {                                                           // Criação de uma Classe que vai comportar um conjunto de funções/objetos pra caracterizar o Pattern OBSERVER.
    constructor() {                                                         // Criação de um Construtor que monta o método 'observadores' que retorna uma array vazia. 
        this.observadores = [];
    }

    inscrever(fn) {                                                         // Função 'inscrever' que adicionar via método 'push' um elemento na array, baseado no parâmetro 'fn'.
        this.observadores.push(fn);
    }

    notificar(data) {                                                       // Função 'notificar' que monta uma iteração dos elementos via método 'forEach', baseado no parâmetro 'data'.
        this.observadores.forEach(fn => fn(data));                          // Arrow Function do 'forEach' que itera a cada 'data' inserido em 'fn()'.
    }

    cancelar(fn) {                                                          // Função 'cancelar' que recebe 'fn' como parâmetro.
        this.observadores = this.observadores.filter(obs => obs !== fn);    // Este método transforma a array vazia num filtro que comparar quais usuários cancelaram a inscrição.
    }
}

const observador = new Observado();                                         // Construtor 'new' que atribui a Classe 'Observado' à constante 'observador'.

console.log('\nDESIGN PATTERN - OBSERVER');
const logData1 = data => console.log(`Inscrição 1: ${data}`);               // Constante criada sem Construtor, que vinculada ao parâmetro 'data'.
const logData2 = data => console.log(`Inscrição 2: ${data}`);
const logData3 = data => console.log(`Inscrição 3: ${data}`);

observador.inscrever(logData1);                                             // Chamada da função 'inscrever' que recebe a constate preenchida e adiciona à array.
observador.inscrever(logData2);
observador.inscrever(logData3);

observador.notificar(`Notificado 1`);                                       // Realiza a 'Notificação 1' para cada elemento inscrito da array.   

observador.cancelar(logData2);                                              // Cancela a inscrição de 'logData2', ou seja exclui o elemento da array. Ocorre através do filtro da array, sendo 'obs' diferente da 'fn' definida.          

observador.notificar(`Notificado 2`);                                       // Realiza a 'Notificação 2' para cada elemento inscrito da array.

// MODULE - Pattern que possibilita organizar melhor o código, sem a necessidade de expor variáveis globais.

let tipo = 'genérico';

function getMonsterType() {                 // Função que retorna a variável 'tipo'.
    return tipo;
}

function setMonsterType(novoTipo) {         // Função que atribui a variável 'tipo' ao valor 'novoTipo', que serve de parâmetro pra função.
    tipo = novoTipo;
}

module.exports = {                          // Exporta as duas funções criadas.
    getMonsterType,
    setMonsterType
};