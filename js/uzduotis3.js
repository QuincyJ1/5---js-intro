console.clear();

let sum1 = 0
for (let x = 0; x = 0; x += 0) {
    console.log(sum1+=x);
}

console.log('---------------------------------')

const start2 = 0;
const end2 = 4;
let sum2 = 0;

for (let x = start2; x <= end2; x++) {
 console.log(sum2+=x)
}

console.log('---------------------------------')

const start3 = 0;
const end3 = 100;
let sum3 = 0;

for (let x = start3; x <= end3; x++) {
    console.log(sum3+=x);
}

console.log('-------------------------------------')

const start4 = 574;
const end4 = 815;
const step4 = 1;
let sum4 = 0;
for (let x = start4; x <= end4; x += step4) {
    console.log(sum4+=x);
}

console.log ('---------------------------------')

const start5 = -50;
const end5 = 50;
let sum5 = 0;

for (let x = start5; x <= end5; x++) {
    console.log(sum5+=x)
}

console.log('--------------------------------')


const start6 = -70;
const end6 = 30;
let sum6 = 0;

for (let x = start6; x <= end6; x++) {
    console.log(sum6+=x)
}

console.log('2 uzduotis--------------------------------------');

const word = 'abcdef';
let reverseWord = '';

for (let x = word.length - 1; x >= 0; x--) {
  reverseWord += word[x];
}

console.log('Atvirksciai parasytas stringas: ' + reverseWord);


console.log('3 uzduotis----------------------------------')

const start7 = 0;
const end7 = 11;
let dalmuo1 = 3

let sveikiSkaiciai1 = 0;

for(let x = start7; x <= end7; x++) {
    if (x % dalmuo1 === 0) {
        sveikiSkaiciai1++;
    }
}


let dalmuo2 = 5;

let sveikiSkaiciai2 = 0;

for(let x = start7; x <= end7; x++) {
    if (x % dalmuo2 === 0) {
        sveikiSkaiciai2++;
    }
}

let dalmuo3 = 7;

let sveikiSkaiciai3 = 0;

for(let x = start7; x <= end7; x++) {
    if (x % dalmuo3 === 0) {
        sveikiSkaiciai3++;
    }
}




console.log(`Skaičių intervale tarp ${start7} ir ${end7}, besidalijančių be liekanos iš ${dalmuo1} yra ${sveikiSkaiciai1} vienetai`);

console.log(`Skaičių intervale tarp ${start7} ir ${end7}, besidalijančių be liekanos iš ${dalmuo2} yra ${sveikiSkaiciai2} vienetai`);

console.log(`Skaičių intervale tarp ${start7} ir ${end7}, besidalijančių be liekanos iš ${dalmuo3} yra ${sveikiSkaiciai3} vienetai`);

console.log('4 uzduotis----------------------------------------------')

const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 3, 2, 3];

let vienetai1 = 0;
let dvejetai1 = 0;
let trejetai1 = 0;
let ketvertai1 = 0;
let penketai1 = 0;


for (let i = 0; i < masyvas1.length; i++) {
    if (masyvas1[i] === 1) {
        vienetai1++;
    } else if (masyvas1[i] === 2) {
        dvejetai1++;
    } else if (masyvas1[i] === 3) {
        trejetai1++;
    } else if (masyvas1[i] === 4) {
        ketvertai1++;
}  else if (masyvas1[i] === 5) {
    penketai1++;
}
}
console.log(`m1 vienetai = ${vienetai1}`);
console.log(`m1 dvejetai = ${dvejetai1}`);
console.log(`m1 trejetai = ${trejetai1}`);
console.log(`m1 ketvertai = ${ketvertai1}`);
console.log(`m1 penketai = ${penketai1}`);


let vienetai2 = 0;
let dvejetai2 = 0;
let trejetai2 = 0;
let ketvertai2 = 0;
let penketai2 = 0;

for (let i = 0; i < masyvas2.length; i++) {
    if (masyvas2[i] === 1) {
        vienetai2++;
    } else if (masyvas2[i] === 2) {
        dvejetai2++;
    } else if (masyvas2[i] === 3) {
        trejetai2++;
    } else if (masyvas2[i] === 4) {
        ketvertai2++;
}  else if (masyvas2[i] === 5) {
    penketai2++;
}
}
console.log(`m2 vienetai = ${vienetai2}`);
console.log(`m2 dvejetai = ${dvejetai2}`);
console.log(`m2 trejetai = ${trejetai2}`);
console.log(`m2 ketvertai = ${ketvertai2}`);
console.log(`m2 penketai = ${penketai2}`);

let vienetai3 = 0;
let dvejetai3 = 0;
let trejetai3 = 0;
let ketvertai3 = 0;
let penketai3 = 0;

for (let i = 0; i < masyvas3.length; i++) {
    if (masyvas3[i] === 1) {
        vienetai3++;
    } else if (masyvas3[i] === 2) {
        dvejetai3++;
    } else if (masyvas3[i] === 3) {
        trejetai3++;
    } else if (masyvas3[i] === 4) {
        ketvertai3++;
}  else if (masyvas3[i] === 5) {
    penketai3++;
}
}
console.log(`m3 vienetai = ${vienetai3}`);
console.log(`m3 dvejetai = ${dvejetai3}`);
console.log(`m3 trejetai = ${trejetai3}`);
console.log(`m3 ketvertai = ${ketvertai3}`);
console.log(`m3 penketai = ${penketai3}`);


let vienetai4 = 0;
let dvejetai4 = 0;
let trejetai4 = 0;
let ketvertai4 = 0;
let penketai4 = 0;

for (let i = 0; i < masyvas4.length; i++) {
    if (masyvas4[i] === 1) {
        vienetai4++;
    } else if (masyvas4[i] === 2) {
        dvejetai4++;
    } else if (masyvas4[i] === 3) {
        trejetai4++;
    } else if (masyvas4[i] === 4) {
        ketvertai4++;
}  else if (masyvas4[i] === 5) {
    penketai4++;
}
}
console.log(`m4 vienetai = ${vienetai4}`);
console.log(`m4 dvejetai = ${dvejetai4}`);
console.log(`m4 trejetai = ${trejetai4}`);
console.log(`m4 ketvertai = ${ketvertai4}`);
console.log(`m4 penketai = ${penketai4}`)





