console.clear();

const marks = [10, 8, 5, 2, 6]



// const mark1 = marks[0];
// const mark2 = marks[1];
// const mark3 = marks[2];  ///DAUG PATOGIAU NEGU SITAS BUDA
// const mark4 = marks[3];
// const mark5 = marks[4];

// const name = user.name;
// const age = user.age;
// const isMarried = user.isMarried;

// const [k, l, m, n] = marks;    // kiekvienam reiksme (a, b, c) paimam is priskirto masyvo. pirmas kintamasis gaus is masyvo priskirta pirma reiksme. Antras gaus antra, trecias, trecia ir t.t. BUTINAI PRADES VISAD NUO PIRMO SKAICIAUS. 




// console.log(k, l, m, n)


const [a, ...likePazymiai] = marks; // ...sugalvotasVardas cia yra rest operator. 

console.log(a, likePazymiai)

// naudinga naudoti sita naudojant objektus

const user = {
    name: 'Jona',
    age: 99,
    isMarried: false,
};

const { isMarried, ...kita } =  user       // is user objekto istrauki dalykus
console.log(isMarried, kita);

const students = [
    { name: 'jonas', age: 99, marks: [4, 5, 2, 7, 1] },
    { name: 'opa', age: 939, marks: [4, 5, 6, 7, 9] },
    { name: 'Klaustutis', age: 29, marks: [2, 3, 10, 7, 1] },
];

// Vardenis, kurio amzius yra xx metu turi N pazymiu.

for (const student of students) {
      const { name, age, marks } = student;
      console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymius`);
}

