console.clear()

/* 
 array: for, for-of, while, do-while, 

object: for-in
*/

const marks1 = [10, 2, 8, 4, 6];

let sum1 = 0;

for (let i = 0; i < marks1.length; i++) {
    const mark = marks1[i];
    sum1 += mark
    console.log(mark)
}

// console.log('sum:', sum1)

// For-of - per visus narius eini is kaires i desine (is eiles). NERA INDEXO. For-ofe jau yra integruota, kad eina nuo 0 iki galo. Taip naudoti butinai, kai reik eit per visa cikla.
console.log('------------')
const marks2 = [10, 2, 8, 4, 6];
let sum2 = 0;

for (const mark of marks2) {
    sum2 += mark
}

console.log('sum:', sum2)


// While. "Daryk tol kol gali."

console.log('------------')
const marks3 = [10, 2, 8, 4, 6];
let sum3 = 0;
let i3 = 0;

while (i3 < marks3.length) {
    const mark = marks3[i3];
    sum3 += mark;
    i3++; 
}

console.log('sum:', sum3)




console.log('------------')

// Do- while  Cia neklausia. Pirma daro, po to klausia ar dar karta. Tuo ir skiriasi nuo while. Niekad jo nenaudot. 
const marks4 = [10, 2, 8, 4, 6];
let sum4 = 0;
let i4 = 0;

do {
    const mark = marks4[i4];
    sum4+=mark;
    i4++
} while(i4 < marks4.length)

console.log('sum:', sum4)


console.clear();

//FOR-IN

console.log('-------------------')

const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const userKeys = Object.keys(user); // kreipiames i object klase, jis turi savyje metoda keys, paduodam objekta kaip duomeni() ir jis itrauksviska ka reikia (iskvies raktus).



for (let i = 0; i<userKeys.length; i++) {
    console.log(i, userKeys[i], '----', user[userKeys[i]]);
}
console.log('-----------------------------------------------');
for(const key in user) {
    console.log(key, ':', user[key]);
}


//BUTINA MOKETI PAPRASTA FOR GERAI, BET LABAI GERAI MOKETI SKAITOMUMUI KITUS.


console.clear();
let i = 10

for (; i < 100;) {
    console.log(i);

    i += 10
}

console.clear();

const bits = [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1];



// continue - ciklo dalis. Ji nurodo testi sekancia iteracija. tarkim for(let i = 0; i < a.length; i++) {
    // if (sum > 1) {
          //continue          ----- baigia i < a.length ir eina prie kitos iteracijos, o eina prie i++
 //   }
// break irgi yra ciklo dalis. Nutraukia ciklo darba.
// jie buna ivilkti i if'a.