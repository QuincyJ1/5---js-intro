console.clear();

function multiply(a, b) {
if(typeof a !== 'number') {
    return 'Error';
}
    const rez = a * b;
    return rez;
}

console.log(multiply( 'labas'))

console.log(multiply(undefined, 7));
console.log(multiply('hello', 7));