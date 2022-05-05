const numbersArray = [];

const limit = 50;

let sum = 0;

let userNumber = 0;

let myCondition = true;

while(sum < limit && myCondition) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    if (sum + userNumber < limit) {
        numbersArray.push(userNumber);
        sum = sumInArray(numbersArray);
    } else {
        myCondition = false;
    }
    console.log(numbersArray);
}

alert('Hai superato il limite di 50! La somma finale è pari a:'+sum);

console.log(sum);

//                          FUNCTIONS

function sumInArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const thisItem = array[i];
        sum += thisItem;
    }
    
    return sum
}