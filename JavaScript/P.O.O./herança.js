// Conceito de Herança no JavaScript.
// A relação de Herança ocorre quando um atributo ou método de um objeto, torna-se um novo 'OBJETO' com suas próprias características/atributos. Isso forma o que chamamos de uma relação de 'Pai-Filho'.
// É possível perceber que 'Bruxa' e 'Drowner' são ambos tipos que surgiram do conceito base de 'Monster'. Neste caso, Objeto Pai = Monster e Objeto Filho = Bruxa e Drowner.
'use strict';

function Monster(tipo) {                        // Criação do novo tipo de Objeto chamada 'Monster'.
    this.type = tipo;                           // Criação do método 'type', que define o tipo do monstro. 
}

function Bruxa(sugaSangue) {                    // Criação da 'Bruxa', que é um objeto oriundo do "Objeto Principal" 'Monster'. Traduzindo para uma linguagem simples, Bruxa é um tipo de Monstro.
    Monster.call(this, 'Vampire');              // O método 'call' chama outro método de uma função que está fora do escopo desta função. Aqui faremos a classificação da Bruxa como: Monstro do tipo Vampiro.

    this.bloodsuck = sugaSangue;                // Criação do método 'bloodsuck', que é o parâmetro da função. Quando a função for chamada ou atribuída, em forma de construtor, à uma variável, terá esse valor especificado pelo Dev. Neste caso podendo ser 'True' ou 'False'.
}

function Drowner(sugaSangue) {                  // Criação do 'Drowner', outro tipo de monstro. Baseado no mesmo conceito da 'Bruxa'.
    Monster.call(this, 'Necrophage');

    this.bloodsuck = sugaSangue;
}

const bruxa = new Bruxa(true);
const drowner = new Drowner(false);

console.log("Tabela de monstros que são capazes de sugar sangue humano.");
console.log('- ', bruxa);
console.log('- ', drowner);