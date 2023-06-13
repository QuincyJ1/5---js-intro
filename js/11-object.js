console.clear();


const users = [
    ['Jonas', 99, true],
    ['Maryte', 95, false],
    ['Petras', 65, false],
    ['Ona', 24, true],
];



const userIndex = 2;
const user = users[userIndex];

const userName = user[0];
const userAge = user[1];
const userIsMarried = user[2];

let vedybinisTekstas = ''

if (!userIsMarried) {
    vedybinisTekstas = 'ne'
}

let hi = `sveiki, mano vardas yra ${userName}, man yra ${userAge} ir as esu ${vedybinisTekstas}vedes.`





console.log(hi)


console.clear();


// objektas:
const student1 = {
    name: 'Jonas', 
    age: 99,
    isMarried: true,
};

const student2 = {
    name: 'Donas', 
    age: 29,
    isMarried: false,
}

const students = [
    student1, 
    student2
]
const studentIndex = 0
const student = students[studentIndex]

console.log(students[studentIndex]);
console.log(students[studentIndex]['isMarried'])
console.log(student2.age) // --------- taip iskviesti objekto reiksme. sutrumpintas variantas. Supaprastinta sintakse. Dazniau reiktu naudoti originaliaja [];



console.clear();

const car = {
    marke: 'audi',
    model: '80',
    color: 'red',
    price: 500,
    doors: 4,
    wheel: 'left',
}
const noriuSuzinoti = 'marke'
console.log(car);

console.log(car['color'])
console.log (car.marke)
console.clear();

const child = {
    name: 'Maryte',
    age: 5,
    parents: [
         {
            name: 'Jonas',
            age: 32,
            phones: [1111, 4444, 5555],
        },
         {
            name: 'Ona',
            age: 35,
            phones: [2222, 3333],
        },
    ],
    marks: [10, 5, 4, 5, 6, 8],
       
   
    
}

const info = child.parents.at(-1).phones.at(-1); // iskviecia paskutini pazymi. (kazkelinta nuo galo paima. -1 bus paskutinis)
console.log(info)
console.log(child.parents[0].age)   

console.log

console.clear();

const augintinis = {
    name: '',
    age: 0, 
    items: [],
};



console.log(augintinis)

augintinis.name = 'Rexas'

console.log(augintinis)

augintinis.age++;
augintinis.items.push('kaulas');
augintinis.items.push('kaulas');
augintinis.items.push('kaulas');
augintinis.items.push('kaulas');
augintinis.age++;
augintinis.age++;


console.log(augintinis)

// augintinis.name = 'Senasis ' + augintinis.name; 
console.log(augintinis)

augintinis.name = augintinis.name.replace('as', 'e'); // pirmas skliaustuose rasosi tas, ka keiti, o antrajame, kuo nori pakeist. 
console.log(augintinis)

