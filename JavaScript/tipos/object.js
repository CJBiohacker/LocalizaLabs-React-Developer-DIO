/* OBJETOS NO JAVASCRIPT */

// Declaração de um objeto e atribuição de propriedades/elementos. Neste caso o 2º elemento é uma 'Array' preenchida por um objeto.
let solidGeo = {
    cor: "Preto",
    peso: 50,
    dimensão: [{
        comprimento: 5,
        altura: 10,
        largura: 2.5
    }]
}

console.log(`Elementos do Objeto\nCor: ${solidGeo.cor} \nPeso: ${solidGeo.peso}kg \nDimensões: C=${solidGeo.dimensão[0].comprimento}cm x A=${solidGeo.dimensão[0].altura}cm x L=${solidGeo.dimensão[0].largura}cm`);

// Modificando a/o propriedade/elemento 'cor' do Objeto 'solidGeo'. De Preto para Azul.
solidGeo.cor = "Azul";
console.log(`\nAlteração da Cor\nNova Cor: ${solidGeo.cor}`);

// Modificando a/o propriedade/elemento 'largura' da Array 'dimensão' no Objeto 'solidGeo'. De 2.5 para 4.85. 
solidGeo.dimensão[0].largura = 4.85;
console.log(`\nAlteração do Comprimento\nNovo Valor: ${solidGeo.dimensão[0].largura}cm\n`);

// Adicionando um/uma propriedade/elemento no Objeto 'solidGeo'. Neste caso, adição de 2 elementos dentro da propriedade 'dimensão' do Object 'solidGeo'. 
var ar = solidGeo.dimensão[0].comprimento * solidGeo.dimensão[0].altura;
var vm = solidGeo.dimensão[0].comprimento * solidGeo.dimensão[0].altura * solidGeo.dimensão[0].largura;

solidGeo.dimensão.push({ area: ar.toFixed(2), volume: vm.toFixed(2) });   // Adição de 'area' e 'volume' com os respectivos cálculos.

console.log(`Adição de novas Dimensões\nDimensões: A=${solidGeo.dimensão[1].area}cm² V=${solidGeo.dimensão[1].volume}cm³\n`);

// Deletando um/uma propriedade/elemento do Objeto 'solidGeo'. Deletando o 'peso'.
delete solidGeo.peso;

console.log(`Excluíndo o Peso\nElementos do Objeto atualizados:\nCor: ${solidGeo.cor} \nPeso: ${solidGeo.peso} kg \nDimensões: C=${solidGeo.dimensão[0].comprimento}cm x A=${solidGeo.dimensão[0].altura}cm x L=${solidGeo.dimensão[0].largura}cm , Ar=${solidGeo.dimensão[1].area}cm² Vm=${solidGeo.dimensão[1].volume}cm³\n`);

// O método 'Object.keys' retorna o nome das propriedades de um objeto, em formato de array.
console.log(`Propriedades do objeto 'solidGeo': ${Object.keys(solidGeo)}`);

// O método 'Object.values' retorna o valor das propriedades de um objeto, em formato de array.
console.log(`Valores das propriedades do objeto 'solidGeo': ${Object.values(solidGeo)}`);

// O método 'Object.freeze' "congela" o estado atual do Objeto e impede quaisquer tipos de alterações das suas propriedades e valores.
Object.freeze(solidGeo);
delete solidGeo.cor;
delete solidGeo.dimensão;

console.log(`Estado atual do objeto 'solidGeo': ${solidGeo.cor} ${JSON.stringify(solidGeo.dimensão)}`);



