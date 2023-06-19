console.clear();
const pirmas = 7;
const antras = 5;
//function declaration
function sum(a, b) {
    return a + b;
}

console.log(`${pirmas} + ${antras} = ${sum(pirmas, antras)}`);

// anonymous function
const diff = function(a, b) {
    return a - b;
}

console.log(`${pirmas} - ${antras} = ${diff(pirmas, antras)}`);


//arrow function - vietoj function irasoma =>
const multiply = (a, b) => {
    return a * b;
}

console.log(`${pirmas} * ${antras} = ${multiply(pirmas, antras)}`);



// jeigu logikos bloke yra tik 1 statementas, galima nerasyti: {return}. BET TIK KAI VIENAS 1 STATEMENTAS!!!
const multiply2 = (a, b) => a * b

console.log(`${pirmas} * ${antras} = ${multiply2(pirmas, antras)}`);



// jeigu parametru bloke yra tik 1 parametras, tai galima nerasyti: ()
const multiply3 = a => a * a

console.log(`${pirmas} * ${pirmas} = ${multiply3(pirmas)}`);


const abbr = (firstName, lastName) => 
`${firstName[0]}.${lastName[0]}.`



console.log(abbr('Vardenis', 'Pavardenis'));

co


