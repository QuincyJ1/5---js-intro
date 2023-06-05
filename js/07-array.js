console.clear();

/* 
Array- sąrašas, matrica, masyvas, arėjus, listas

[].length - elementu kiekis masyve 
*/

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];

console.log(students);

console.log(students[4])
console.clear();

function suma(masyvas) {
return masyvas[0] + masyvas[1] + masyvas[2];
}
const a1 = [1, 2, 3]
const s1 = suma(a1);

const a2 = [10, 9, 8];
const s2 = suma(a2);

const a3 = [5, 5, 5];
const s3 = suma(a3);

console.log(s1);
console.log(s2);
console.log(s3);

const empty = [];
const index = students.length - 1;

console.log(empty, empty.length);

console.log('Paskutinis:', students[index]);       // taip suzinai kas yra paskutinis array viduj.

console.clear();

const stud1 = 'Jonas'
const marks1 = [10, 2, 8, 2, 5, 7];

const stud2 = 'Maryte'
const marks2 = [10, 2, 8];

const stud3 = 'Petras'
const marks3 = [10, 8, 1];

const stud4 = 'Ona'
const marks4 = [5, 3, 5, 7, 9, 5];

function studentIntro(vardas, pazymys) {
return `${vardas} ${pazymys}`
}

console.log(studentIntro()); 