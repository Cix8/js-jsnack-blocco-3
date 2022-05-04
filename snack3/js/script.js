const teamsNamesArray = ['Juventus','Napoli','Milan','Torino','Inter']

class Team {
    constructor(nome, puntiFatti, falliSubiti) {
        this.nome = nome,
        this.puntiFatti = puntiFatti,
        this.falliSubiti = falliSubiti
    }
}

const teamsArray = teamsGenerator(teamsNamesArray);

for (let i = 0; i < teamsArray.length; i++) {
    getRndPoints(teamsArray[i]);
}

console.log(teamsArray);

//                          FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function teamsGenerator(itemsArray) {
    const newArray = [];

    for (let i = 0; i < itemsArray.length; i++) {
        const newTeam = new Team(itemsArray[i],0,0);
        newArray.push(newTeam);
    }
    
    return newArray
}

function getRndPoints(itemObj) {
    itemObj.puntiFatti = getRndInteger(1,50);
    itemObj.falliSubiti = getRndInteger(1,30);
}