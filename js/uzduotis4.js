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
console.log(isrinktiRaides('abc', 0))
console.log(isrinktiRaides('abc', -5))
console.log(isrinktiRaides( 'abc', 4))
console.log(isrinktiRaides( 'ab', 43))
console.log(isrinktiRaides('dd', Infinity))
console.log(isrinktiRaides('dd', -Infinity))
console.log(isrinktiRaides(null, 5))
console.log(isrinktiRaides('aaa', null))
console.log(isrinktiRaides('abcdefg', 2 ))
console.log(isrinktiRaides('abcdefghijkl', 3))

console.log('-------------------------------')


console.log(isrinktiRaides( 'abc', 4))

console.log(isrinktiRaides( 'abcddd', 5))

