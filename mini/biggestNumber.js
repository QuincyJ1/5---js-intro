console.clear();

function biggestNumber(list) {
    //validacijos
    if (!Array.isArray(list)) {  // Kai yra array'us, reikia rasyt taip. Sita iskalt ir zinot. Typeof array'ams nenaudojamas Siuo atveju sauktukas reikalingas, todel kad ieskom kas nera array'us. 
    return 'ERROR: DUOK ARRAY TIPO REIKSME';
    }
    
    if (list.length === 0 ) {
    return 'Negali but tuscias sarasas';
    }

    //logika
    let max = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (typeof item !== 'number' || !isFinite(item)) {
            continue
        }
    }

    if (item > max) {
        max = item;
    }

  

    // taip patikrinam kuris skaicius yra didziausias is viso array. Turiu puikiai suprast ka sitos 4 eilutes zemiau daro ir zinoti viska.
    for (let i = 0; i < list.length; i++) {         
        const item = list[i];
        if (item > max) {              
            max = item;
        }
    }
    return max;
}
console.log(biggestNumber(244444));
console.log(biggestNumber('labas'));
console.log(biggestNumber(true));
console.log(biggestNumber(false));
console.log(biggestNumber(biggestNumber));
console.log(biggestNumber());
console.log(biggestNumber(undefined));
console.log(biggestNumber([]));
console.log('-----------------------------')
console.log(biggestNumber(null));
console.log(biggestNumber({}));
console.log('-------------------------------')
console.log(biggestNumber([1]));
console.log(biggestNumber([1,44,55,66]));
console.log(biggestNumber([1,54,2,445,4,2]));
console.log(biggestNumber([1, 98214, 234, 55,2,42,424242]));
console.log(biggestNumber([-5, -77, -88, -2]));

