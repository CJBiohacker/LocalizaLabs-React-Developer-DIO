// ESTRUTURAS CONDICIONAIS NO JAVASCRIPT
// Estrutura Condicional If...Else
var a = 'Witcher';
var b = 'Monster';
var c = 'Nilfgaardian';
var d = "Scoia'tael";

console.log("IF...ELSE");
if (a = 'Witcher' || "Scoia'tael") {
    console.log("Você é uma maldita aberração !!");
} else {
    console.log("Graças aos Deuses, outro Humano!!");
}

// Estrutura Condicional If...Else If

const array = [a, b, c, d];

console.log("\nIF...ELSE IF");
array.forEach(item => {
    if (item = 'Witcher') {
        console.log("Maldita aberração mutante !!");
    } else if (item = 'Monster') {
        console.log("Oh pelos Deuses, nós estamos mortos !!");
    } else if (item = 'Nilfgaardian') {
        console.log("Malditos fascistas do Sul !!");
    } else if (item = "Scoia'tael") {
        console.log("Preparem as armas, os Esquilos chegaram !!");
    }
});

// Estrutura Condicional Switch...Case (É possível obter a mesma estrutura utilizando apenas IF's dentro de um forEach para Arrays.)

console.log("\nSWITCH...CASE");
switch (d) {
    case 'Witcher':
        console.log("\nMaldita aberração mutante !!");
        break;
    case 'Monster':
        console.log("\nOh pelos Deuses, nós estamos mortos !!");
        break;
    case 'Nilfgaardian':
        console.log("\nMalditos fascistas do Sul !!");
        break;
    case "Scoia'tael":
        console.log("\nPreparem as armas, os Esquilos chegaram !!");
        break;
    default:
        break;
}




