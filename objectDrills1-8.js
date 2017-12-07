'use strict';
//1. Object initializers and methods
function initBread(flour, water) {
    this.flour = flour;
    this.water = water;

    return this;
}

const loaf = new initBread(300, 210);
console.log(loaf);
loaf.hydration = function() { return ((this.water / this.flour) * 100); };
const hydrate = loaf.hydration();
console.log(`Hydrate function = ${hydrate}`);

console.log('\n');

//2. iterate over an objects properties
const fivePropObj = {
    foo: 'I',
    bar: 'am',
    fum: 'having',
    quux: 'fun',
    span: 'today.'
};

for (const item in fivePropObj) {
    console.log(`${item} = ${fivePropObj[item]}`);

}
console.log('\n');


//3. Arrays in objects

const hobbitMeals = {
    meals: [
        'breakfast',
        'second breakfast',
        'elevenses',
        'lunch',
        'afternoon tea',
        'dinner',
        'supper'
    ]
};

const hobbit = hobbitMeals;
console.log(`The hobbit's 4th meal of the day is: ${hobbit.meals[3]}`);

console.log('\n');



//4. Array of objects
const Sandy = {
    name: 'Sandy',
    jobTitle: 'Marketing Director'
};

const Bill = {
    name: 'Bill',
    jobTitle: 'Merchandiser'
};

const Tricia = {
    name: 'Tricia',
    jobTitle: 'Product Manager'
};

const Steve = {
    name: 'Steve',
    jobTitle: 'VP of Sales'
};

const employees = [Sandy, Bill, Tricia, Steve];

employees.forEach(person => {
    console.log(`${person.name} : ${person.jobTitle}`);
});

console.log('\n');



//5. Properties that aren't there

employees.forEach(person => {
    if (person !== Sandy) {
        person.boss = 'Sandy';
    }
});

employees.forEach(person => {
    console.log(`${person.jobTitle}, ${person.name} reports to ${person.boss}`);
});


console.log('\n');

const cypher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

//6.  Cracking the code
function decode(words) {
    const decodedMsg = [];
    let eachWord = words.split(" ");

    eachWord.forEach(word => {
        if (word.charAt(0) === 'a') {
            decodedMsg.push(word.charAt(cypher.a));
        } else if (word.charAt(0) === 'b') {
            decodedMsg.push(word.charAt(cypher.b));
        } else if (word.charAt(0) === 'c') {
            decodedMsg.push(word.charAt(cypher.c));
        } else if (word.charAt(0) === 'd') {
            decodedMsg.push(word.charAt(cypher.d));
        } else { decodedMsg.push(" "); }
    });
    return decodedMsg;
}

console.log(decode('craft block argon meter bells brown croon droop'));

console.log('\n');

//7. Facory Functions with LOTR

function createCharacter(name, nickName, race, origin, attack, defense) {
    return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        describe: function() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}`)
        },
        evaluateFlight: function(characterObj) {
            return (`Your opponent takes ${this.defense > this.attack ? 'zero' : this.attack - this.defense} damage and you receive ${characterObj.defense > characterObj.attack ? 'zero' : characterObj.attack - characterObj.defense} damage`)
        }

    }
};

const characters = [];

const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
const arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 4, 2);

gandalf.describe();
console.log(frodo.evaluateFlight(gandalf));
console.log(frodo.evaluateFlight(aragorn));

characters.push(gandalf);
characters.push(bilbo);
characters.push(frodo);
characters.push(aragorn);
characters.push(legolas);
characters.push(arwen);

console.log('\n');

function isAragorn(character) {
    return character.nickName === 'aragorn';
}
characters.find(isAragorn).describe();

console.log('\n');

const hobbitCharacters = characters.filter(char => char.race === 'Hobbit');
console.log(hobbitCharacters);

console.log('\n');

const attackValues = characters.filter(char => char.attack > 5);
console.log(attackValues);