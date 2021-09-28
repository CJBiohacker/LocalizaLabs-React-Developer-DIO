const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const RandomNumberA = (a) => {
    let numberA = a[Math.floor(Math.random() * a.length)];

    return numberA;
}

const RandomNumberB = (b) => {
    let numberB = b[Math.floor(Math.random() * b.length)];

    return numberB;
}

const TargetSumArray = (A, B) => {
    let sum = A + B;
    console.log(`Antes do If Geral ${A} + ${B} = ${sum}`);

    switch ((A !== B) && (sum === targetSum)) {
        case true:
            return console.log([A, B]);
            break;

        case false:
            while ((A === B) && (sum != targetSum)) {

            }
            break;
        default:
            break;
    }
}

TargetSumArray(RandomNumberA(array), RandomNumberB(array));

// const TargetSumArray = (A, B) => {
//     let sum = A + B;
//     console.log(`Antes do If Geral ${A} + ${B} = ${sum}`);

//     if (A != B) {
//         if (sum == 10) {
//             return console.log([A, B]);
//         }
//     } else {
//         console.log(`Após o else ${A} + ${B} = ${sum}`);
//         while ((A == B) && (sum != targetSum)) {
//             A = RandomNumberA(array);
//             B = RandomNumberB(array);
//             sum = A + B
//             console.log(`Dentro do While ${A} + ${B} = ${sum}`);
//             if (A != B) {
//                 if (sum == 10) {
//                     break;
//                 }
//             }
//         }
//         return console.log(`Return Final ${A} + ${B} = ${sum}`);
//     }
// }

