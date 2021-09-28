// ESTRUTURAS CONDICIONAIS NO JAVASCRIPT

// Declaração de variáveis e constantes que serão utilizadas no código.
var a = 'Witcher';
var b = 'Monster';
var c = 'Nilfgaardian';
var d = "Scoia'tael";

const criaturas = [a, b, c, d];
const numeros = [2, 4, 5, 6, 10];

// Estrutura Condicional If...Else

console.log("IF...ELSE");
if (a == 'Witcher' || "Scoia'tael" || 'Monster') {
    console.log("Você é uma maldita aberração !!");
} else {
    console.log("Graças aos Deuses, outro Humano!!");
}

if (c == 'Nilfgaardian') {
    console.log("Malditos fascistas do Sul !");
} else {
    console.log("Graças aos Deuses, outro Humano!!");
}


// Estrutura Condicional Switch...Case (Utilizado quando as condicionais se encaixam em mais de um resultado.)

console.log("\nSWITCH...CASE");
switch (d) {
    case 'Witcher':
        console.log(`Um ${a} !! Maldita aberração mutante !!"`);
        break;
    case 'Monster':
        console.log(`Um ${b} !! Oh pelos Deuses, nós estamos mortos !!`);
        break;
    case 'Nilfgaardian':
        console.log(`Um ${c} !! Malditos fascistas do Sul !!`);
        break;
    case "Scoia'tael":
        console.log(`Um ${d} !! Preparem as armas, os Esquilos chegaram !!`);
        break;
    default:
        break;
}

// Estrutura Condicional If...If com um forEach para iterações dos elementos de uma Array. É um método alternativo ao Switch...Case.(Utilizado quando a condicional se aplica em mais de um resultado. Quando é necessário fazer análises paralelas dos itens.)

console.log("\nIF...IF");
numeros.forEach(item => {
    if (item % 2 == 0) {
        console.log(`O nº ${item} é divisível por 2`);
    } if (item % 3 == 0) {
        console.log(`O nº ${item} é divisível por 3`);
    } if (item % 5 == 0) {
        console.log(`O nº ${item} é divisível por 5`);
    } if (item % 10 == 0) {
        console.log(`O nº ${item} é divisível por 10`);
    }
});

// Estrutura Condicional If...Else com um forEach para iterações dos elementos de uma Array. (Utilizado quando a condicional se encaixa no primeiro resultado proposto.)

console.log("\nIF...IF");
numeros.forEach(item => {
    if (item % 2 == 0) {
        console.log(`O nº ${item} é divisível por 2`);
    } else if (item % 3 == 0) {
        console.log(`O nº ${item} é divisível por 3`);
    } else if (item % 5 == 0) {
        console.log(`O nº ${item} é divisível por 5`);
    } else if (item % 10 == 0) {
        console.log(`O nº ${item} é divisível por 10`);
    }
});






