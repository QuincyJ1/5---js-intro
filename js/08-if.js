console.clear();

/* IF - palyginimas

palyginimo operatoriai:
Visi: > < >= <=; == (lygumo operatorius)
Naudotini: > < >= <= === (grieztas palyginimas) !==
Nenaudotini: == 

SIntakse:
if() {}
if() {} else {}
*/

console.log('Start');

const a = 7;
const b = 5;

if (a > b) {
    console.log('Daugiau (a > b)');
} else {
    console.log('Nedaugiau')
}

console.log('End');

console.log('------------------')


// Code nesting


const arSvieciaSaule = true;
const arLyja = false; 
let kaDaryti = 'Dar nezinau'

if(arSvieciaSaule == true) {
    if (arLyja == true) {
        console.log('Pries eidamas pasiimk sketi');
    } else {
        console.log('geros keliones');
    }
} else {
    if (arLyja == true) {
        console.log('Miegosiu po kaldra');
    } else {
        console.log('ZZZ');
    }
   
}

console.log(kaDaryti);


// 
const day = 3;
let weekday = 'Nezinau'

if(day == 1) {
    weekday = 'Pirmadienis';
} else { 
    if(day == 2) {
        weekday = 'Antradienis'
    } else { 
        if(day == 3) {
            weekday = 'Treciadienis'
        } 
    }        
} 

console.log(weekday);
console.log('------------------------')

const diena = 1;
let kokiaDiena = '...'

if (diena == 1) {
    kokiaDiena = 'pirma'
} else if (diena == 2) {
    kokiaDiena = 'antra'
} else if (diena == 3) {
    kokiaDiena = 'trecia'
} else if (diena == 4) {
    kokiaDiena = 'ketvirta'
} else if (diena == 5) {
    kokiaDiena = 'penkta'
} else if (diena == 6) {
    kokiaDiena = 'sesta'
} else if (diena == 7) {
    kokiaDiena = 'septinta'
} else {
    kokiaDiena = 'Nera tokios dienos';
}

console.log(kokiaDiena);


console.clear();

const penki = 5;
const five = '5';


// su === lyginama ir tipas ir paskui verte. Visais atvejais privaloma naudoti triguba lygybe(===). == nenaudojamas.


//sauktukas reiskia ne. jei pamatom sauktuka, sakom zodi ne. siuo atveju reiskia, kad nelygu. !== griezta nelygybe. Ja ir naudot.
if (5 !== 5 ) {
    console.log('Dabar')
} else {
    console.log('Priesingai');
}


const tiesa = true;


if (tiesa) {
    console.log('Yra tiesa');
} else {
    console.log('melas');
}

const melas = false;

if (melas === false) {
    console.log('>>> Yra tiesa!');
} else {
    console.log('>>> Melas...')
}

if (!melas) {
    console.log('>>> Yra tiesa!');
} else {
    console.log('>>> Melas...')
}
 

// cia abu paskutiniai ifai yra tas pats. ! visada reiskia ne. Invertinta logine reiksme.

console.clear();

console.log(!false);

function arPilnametis(amzius) {
   return amzius >= 18
}

console.log(arPilnametis(28))
