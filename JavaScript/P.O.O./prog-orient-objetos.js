// CONCEITO DE P.O.O NO JAVASCRIPT 
// Bases de P.O.O. = Herança, Encapsulamento, Abstração e Polimorfismo.
/* A Programação Orientada à Objetos no JavaScript é baseada em PROTÓTIPOS ou 'PROTOTYPES', e isso se aplica a qualquer variável criada no código.
O JavaScript realiza automaticamente uma referência conhecida como '__proto__' dentro do sistema baseada no CONSTRUTOR ou 'CONSTRUCTOR' do tipo de variável/objeto/função criado. Resumindo, o CONSTRUTOR monta a variável que o Dev cria/declara, baseado no tipo escolhido e armazena na referência '__proto__'. */

'use strict';

const meuTexto = "Olá protótipo!";

console.log(meuTexto.split(''));    // O método 'split' da const que é uma cadeia de 'string' separa os caracteres caractere por caractere, neste caso incluíndo espaço e pontuações.
console.log(meuTexto.split(' '));
console.log(`${meuTexto.split('o')}\n`);

// Demonstrando a relação de construção de Objetos e Classes através de Funções e Variáveis. (Existe a possibilidade de criar um OBJETO direto de uma variável, que é o método mais simples, porém limitado no JavaScript.)

function Pessoa(nome) {                                 // Função que vai representar a construção de um novo tipo de 'OBJETO' chamado 'Pessoa'.
    this.name = nome;                                   // Criação do método 'name', que chama o 'OBJETO' 'Pessoa' e víncula a ela algum dado definido pelo Dev (neste caso, seria o atributo 'name').
}

const CJ = new Pessoa('Carlos Junior');                 // O operador 'NEW' permite ao Dev criar uma instância de tipo de objeto baseado na função de construtor de objetos padrão do JavaScript. Analogicamente exemplificando, usar um Construtor de Objetos para montar um novo Objeto, ou uma Instanciação. Neste caso, atribuímos o objeto 'Pessoa' à constante 'CJ'.
const JC = new Pessoa('Jesus Cristo');

console.log(CJ.name);
console.log(JC.name);