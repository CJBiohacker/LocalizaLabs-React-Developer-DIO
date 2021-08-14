const { getMonsterType, setMonsterType } = require('./design-pattern.js');          // Importa as duas funções criadas no arquivo 'design-pattern.js', vinculando ambas como constantes.

console.log(getMonsterType());              // Imprime a função que retorna o valor 'genérico', atribuído à variável 'tipo' no arquivo 'design-pattern.js'.
setMonsterType('Relict');                   // Executa a função 'setMonsterType' que atribui a string 'Relict' à variável 'novoTipo', que substitui o valor padrão da variável 'tipo' do arquivo 'design-pattern.js'.
console.log(getMonsterType());              // Imprime a função que retorna o novo valor setado. ('Relict')