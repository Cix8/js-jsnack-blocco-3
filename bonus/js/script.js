const mainElement = document.getElementsByTagName('main')[0];
console.log(mainElement);

const redDiv = document.createElement('div');
redDiv.setAttribute('id', 'red')

const greenDiv = document.createElement('div');
greenDiv.setAttribute('id', 'green');

const numbersArray = [1,2,3,5,8,10,34,5,7,23,45,76,77,84,55,52,33,11,109]
console.log(numbersArray);

const oddNumbersArray = numbersArray.filter( element => element % 2 === 1 ? true : false);

const evenNumbersArray = numbersArray.filter( element => element % 2 === 0 ? true : false);

redDiv.append(oddNumbersArray);
greenDiv.append(evenNumbersArray);

mainElement.append(redDiv, greenDiv);