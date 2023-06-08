console.clear();

function numberLength(number) {
   
    if (typeof number !== 'number' || isNaN(number)) {
    return 'ERROR: duok skaiciu'; 
    }
    if (number === Infinity || number === -Infinity){
    return 'Ka tu cia duodi per skaicius blemba. Begalybes nereik'
    }
  
const numberAsString = '' + number;
let size = numberAsString.length; 

// tikriname ar yra minusas
if(number < 0) {
    size--
}

//tikriname ar skaicius yra desimtainis?
if(number % 1 !== 0){
size--;
}
    return size;
}

console.log(numberLength(5));
console.log(numberLength(781));
console.log(numberLength(38069857896));
console.log(numberLength(false));
console.log(numberLength('asdas'))
console.log(numberLength(NaN));
console.log(numberLength(Infinity));
console.log(numberLength(undefined));
console.log(numberLength());
console.log(numberLength([]));
console.log('------------------------------------');         // vieno testo niekad neuztenka.
console.log(numberLength(-5));
console.log(numberLength(-781));
console.log(numberLength(-38069857896));
console.log(numberLength(3.14));
console.log(numberLength(3.142));
console.log(numberLength(-3.142313));

