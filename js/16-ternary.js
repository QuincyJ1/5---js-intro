console.clear();

/*
Ternary - trejybe
klausimas ? teigiama dalis : neigiama dalis
*/

const limit = 18;
const age = 19;

const youAre = age >= limit ? 'tu esi pilanametis' : 'tu esi nepilnametis';
console.log (youAre);


// siandien prilijo 4mm;
// siandien sausa
const rainLevel = 3;
const rainStr =  rainLevel === 0 ? 'Siandien sausa' : `prilijo ${rainLevel}mm`

console.log(rainStr)


// Ko tu tyli?
// Ok, grazus zodis: 
const zodis = '';

const sakinys = zodis ? `Ok, grazus zodis: ${zodis}` : 'Ko tu tyli?'

console.log(sakinys)

const q1 = 0 ? 1 ? 2 : 3 : 4;
console.log(q1);