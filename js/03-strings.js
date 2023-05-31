console.clear();

/* string - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai: 
 - viengubos kabutes
 - dvigubos kabutes
 */

 const vardas = 'Jonas';
 const vardas2 = "Maryte";

 console.log(vardas);
 console.log(vardas2);

 const firstName = 'Ona';
 const lastName = 'Onaityte';

 const fullName = firstName + ' ' + lastName;   // ' ' duoda tarpa. 
 console.log(fullName);

 const rekiam = 'Sveiki, as esu ' + firstName + '!';
 console.log(rekiam)

 const kabute12 = "Vienguba (') ir dvi" + 'dviguba (") kabutes';
 console.log (kabute12);

 const kabute12_1 = "Vienguba (\') ir dvi" + 'dviguba (\") kabutes';
 console.log(kabute12_1);   // nesvarbu kaip inicijuosi stringa, jei turinyje surandi kabute, pries visas sudedi backslasha ir escapini nuo klaidu // 

//  const back = 'Backslash (\\)';     
//  console.log(back);            // reikia \\ kad isspausdintu, nes jei bus \, nespausdins nes pirmiausia ji priims kaip ignoravimo. Tada antra nupies. Tada trecias jei bus (\\\), vel nerodys, bet jei bus ketvirtas (\\\\), rodys \\.
console.clear();
 const back = 'Backslash (\\\\)';
 console.log(back);


 console.clear();

//  const labas1 = 'Labas\n\
//  rytas\n\                             // \n - new line simbolis // 
//  Lietuva!'; 


 const labas2 = `Labas 
rytas,
Lietuva!`;
                console.log(labas2);





// stringuose geriausia naudot `` (backtick). taip pat ir formatuoja backtickai automatiskai // 


const name = 'Martynas;'
const age = 99;
const iLike = 'masina'

const martynas = `Sveiki as esu ${name}, man yra ${age} ir as megstu ${iLike} `;
console.log(martynas);


//${} --- naudojama tik naudojant `` . Taip panaudojami stringai. //;


console.clear()


// const skaicius = `4`;
// let daugiklis = `1`;
// let rezultatas = `4`;
// let eilute = `${skaicius} * ${daugiklis} = ${rezultatas}`;
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas} `);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*2}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*3}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*4}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*5}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*6}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*7}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*8}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*9}`);
// console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*10}`);

console.clear();

const skaicius = `9`;
let daugiklis = `1`;
let rezultatas = `9`;

console.log(`${skaicius} * ${daugiklis++} = ${rezultatas}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*2}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*3}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*4}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*5}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*6}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*7}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*8}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*9}`);
console.log(`${skaicius} * ${daugiklis++} = ${rezultatas*10}`);

console.clear();





console.clear();

const multiplier = 3;

let number = 0; 

const lentele3 = `
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}

`

console.log(lentele3);

console.clear();

const str = 'pavyzdys';


console.log(str.length);

let strIndex = 0; 

console.log(str[strIndex++]);    // issaukia reikiama simboli is teksto. Simboliu indexas prasideda nuo 0 //
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);




console.clear();

const userFirstName = 'Chuck';
const userLastName = 'Norris';

const userAbbr = `${userFirstName[0]}.${userLastName[0]}.`


console.log(userAbbr);




