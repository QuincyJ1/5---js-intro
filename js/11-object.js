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


