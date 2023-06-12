console.clear();

function isrinktiRaides(text,  number) {

    if (typeof text !== 'string') {
    return 'Pirmasis kintamasis turi buti tekstas'
    }

    if (text.length === 0 || text.length > 100 ) {
    return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio'
    }
    if (typeof number !== 'number' || !isFinite(number)) {
    return 'Antras kintamasis yra netinkamo tipo'
    }
    if (number <= 0) {
        return 'Antrasis kintamasis turi buti didesnis uz 0'
    }

    
    if (number > text.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }

    let newWord = '';
    for (let x = number - 1; x < text.length; x+=number) {
        newWord += text[x];
    }

    return newWord;
}

console.log(isrinktiRaides(1561, 2))
console.log(isrinktiRaides('', 0))
console.log(isrinktiRaides( 'abc', 'd'))
console.log(isrinktiRaides( 'abc', '1'))
console.log(isrinktiRaides('abcgf', 0))
console.log(isrinktiRaides('abc', -5))
console.log(isrinktiRaides( 'abc', 4))
console.log(isrinktiRaides( 'ab', 43))
console.log(isrinktiRaides('dd', Infinity))
console.log(isrinktiRaides('dd', -Infinity))
console.log(isrinktiRaides(null, 5))
console.log(isrinktiRaides('aaa', null))
console.log(isrinktiRaides(undefined, 5))
console.log(isrinktiRaides('abcdefg', 2 ))
console.log(isrinktiRaides('abcdefghijkl', 3))



// console.clear();
console.log('--------------------------------------')

function dalyba (num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 'Nulis cia nera variantas'
    }
    
    if (typeof num1 !== 'number' || !isFinite(num1)) {
return 'Pirma reiksme turi buti skaicius.'
    }

    if (typeof num2 !== 'number' || !isFinite(num2)) {
        return 'Antra reiksme turi buti skaicius.'
            }

const result = num1 / num2
    return result;
}



console.log(dalyba(5, 2))
console.log(dalyba(-5, 2))
console.log(dalyba(520, 20))
console.log(dalyba(Infinity, 2))
console.log(dalyba(-Infinity, 2))
console.log(dalyba(0, 2))
console.log(dalyba(4, 0))
console.log(dalyba(null, 5))
console.log(dalyba(5, null))
console.log(dalyba(NaN, 8))
console.log(dalyba(4, NaN))
console.log(dalyba(undefined,6))
console.log(dalyba(6, undefined))
console.log('---------------------')

