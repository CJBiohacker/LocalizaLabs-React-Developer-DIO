console.log(`Arrow Function forEach If Else`);
function findNumberIfElse(arr, k) {
    arr.forEach(item => {
        if (item == k) {
            console.log('YES');
        } else if (item != k) {
            console.log('NO');
        }
    });
}

findNumberIfElse([1, 2, 3, 4, 5], 1);

console.log(`\nArrow Function forEach Switch Case`);
function findNumberSwitch(arr, k) {
    arr.forEach(item => {
        switch (item) {
            case item == k:
                console.log(`YES`);
                break;
            case item != k:
                console.log(`NO`);
                break;
        }
    });
}

findNumberIfElse([1, 2, 3, 4, 5], 0);