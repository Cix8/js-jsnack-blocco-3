// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

const firstArray = [2,5,6,7,9];

const secondArray = [2,5,6,7,8,8,9,10];

const longerArray = findLongestArray(firstArray, secondArray)[0];

const shorterArray = findLongestArray(firstArray, secondArray)[1];

const shorterArrayCopy = addRandomElementsToGetSameLength(longerArray, shorterArray);

console.log('');
console.log(longerArray);
console.log('copia dell\'array più corto: ');
console.log(shorterArrayCopy);
console.log('');
console.log('array più corto originale: ');
console.log(shorterArray);

//                          FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function addRandomElementsToGetSameLength(longestArray, shortestArray) {
    const shortestArrayCopy = [...shortestArray];
    for (let i = shortestArray.length; i < longestArray.length; i++) {
        const newItem = getRndInteger(1,10);
        console.log(newItem);
        shortestArrayCopy.push(newItem);
    }
    return shortestArrayCopy
}


function findLongestArray(array1, array2) {
    let longer;
    let shorter;
    if (array1.length > array2.length) {
        longer = array1;
        shorter = array2;
    } else if (array1.length < array2.length) {
        longer = array2;
        shorter = array1;
    } else {
        alert('I due array hanno la stessa lunghezza');
        longer = array1;
        shorter = array2;
    }
    let result = [longer,shorter]
    return result
}

