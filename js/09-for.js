console.clear();

/* 
For - ciklas, kuris kartoja procesus N-kartu.\
for (1; 2; 3) {}
1) inicijuojam kintamaji pasikartojimu kiekiui skaiciuot (aka kelintas db kartas)
2) ar kartoti? jei tenkina - kartoja. jei ne, baigiam darba
3) tai kaip keisti 1 dalies kintamaji?
*/ 

const tekstas = 'su gimimo diena!';


for (let i = 0; i < 5; i = i + 1) {
       console.log(i, tekstas);
}

for (let i = 10; i < 17; i = i + 1) {
console.log(`${i}) va ir tiek...`)
}

for(let x = 0; x <= 5; x += 1) {
console.log(x + '...')
}

console.clear();

for (let x = 8; x >= 0; x -= 2) {
    console.log(x);
}

console.clear(); 

const start = 0;
const end = 10;
const step = 1;

let sum = 0;


for (let i = start; i <= end; i+=step) {
    console.log(sum+=i);
}

console.clear();

const pazymiai = [10, 2, 8, 4, 6];
let pazymiuSuma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    pazymiuSuma += pazymys;
}

const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log(`Pazymiu vidurkis yra ${pazymiuVidurkis}.`);

console.clear();
const numbers = [10, -7, 5, 77, 13, -9, 0, 14];
let kiek = 0;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
console.log(number);
if (number >= 0) {
    kiek++;
}
}

console.log('KIEK:', kiek);


// const list = [];     JEIGU YRA MASYVAS, NAUDOSI SITAS EILUTES. 
// for (let i = 0; i < list.length; i++) {
//     const item = list[i];
// }

console.clear();

const dictionary = ['Labas', 'rytas', 'sakau', 'tau', 'mano', 'mielas', 'mieste', 'ka', 'tu', 'ka', 'vakare'];
let trumpi = 0;
let toksPat = 0;
let ilgu = 0;
const zodis = 'Labas';
const ilgis = zodis.length;

for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i]
    if (word.length === ilgis) {
        toksPat++;
    } else if (word.length < ilgis) {
        trumpi++;
    } else {
        ilgu++;
    }
}
console.log(toksPat);
console.log(trumpi);
console.log(ilgu);


console.clear();

const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 3, 2, 3];

let vienetai = 0;
let dvejetai = 0;
let trejetai = 0;
let ketvertai = 0;
let penketai = 0;


for (let i = 0; i < masyvas1.length; i++) {
    const number = masyvas1[i]

}

