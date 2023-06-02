console.clear();

/* FUNCTION - perpanaudojamas logikos blokas
*/


const c1 = 10;
const c2 = 12
const c3 = 9;
const c4 = 6;
const c5 = 14;




function sayMyName() {
    return 'Jonas';
}

const myName = sayMyName();
console.log(myName);

function suma (pirmasSkaicius, antrasSkaicius) {                  //pats susigalvoji pavadinima//
return pirmasSkaicius + antrasSkaicius;
}

const s1 = suma(7, 5);
const s2 = suma(-5, 5);
const s3 = suma(100, -7);
suma();   // taip iskvieciam funkcija!!;
console.log(s1);
console.log(s2);
console.log(s3);


function pirmaRaide(vardas) {
return  vardas[0];
}

const r1 = pirmaRaide('Jonas');
const r2 = pirmaRaide('Maryte');
const r3 = pirmaRaide('Petras');
const r4 = pirmaRaide('Ona');

console.log('Pirmos raides:', r1, r2, r3, r4)

function inicialai(vardas, pavarde) {
return `${vardas[0]}.${pavarde[0]}.`;
}

const ini1 =  inicialai('Chuck', 'Norris');
const ini2 = inicialai('Pamela', 'Anderson');

console.log('Inicialas 1:', ini1);
console.log('Inicialas 2:', ini2);


console.clear();

// Sveiki, mano vardas Jonas ir man 99 metai!
// Sveiki, mano vardas Maryte ir man 88 metai!
// Sveiki, mano vardas Petras ir man 50 metai!
// Sveiki, mano vardas Ona ir man 25 metai

function dalyvis(vardas, metai) {
return `${vardas} ${metai}`;

}

const dalyvis1 = dalyvis ('Jonas', '99')
const dalyvis2 = dalyvis ('Maryte', '88')
const dalyvis3 = dalyvis ('Petras', '50')
const dalyvis4 = dalyvis ('Ona', '25')

console.log('Sveiki, mano vardas ', dalyvis1(vardas)  );





