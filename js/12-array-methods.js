/*
Kuriuos butina moketi!!
- at (gali paimt tiek is prieki otik is galo)
- filter
- flat ()
- forEach
- includes
- indexOf
- join
- map 
- push
- reduce
- reverse
- slice
- sort

*/



console.clear();


const masyvas = [10, 2, 8, 4, 6];
console.log(masyvas.at(1)); // pirmas index
console.log(masyvas.at(-1)); // paskutinis index

const double = [
    5,
    4, 
    [8, 9 , 10], 
    3,
    [1, 2],
    9
];

console.log(double.flat()); // buvo atidarytas masyvas ir reiksmes perkeltos i pirmo lygio masyva.
console.log(double.flat().flat());

console.clear();

console.log(masyvas.join(' '));  // sujungia i stringa viska. skliausteliuose pazymi kaip jie bus atskirti.

masyvas.push(10)
console.log(masyvas); // prideda skaiciu pr galo


masyvas.pop() // atima pr galo
console.log(masyvas);

const last3 = masyvas.shift();
console.log(masyvas, last3);  // 

const last4 = masyvas.unshift(0);
console.log(masyvas, last4);  // 0 istato i prieki

masyvas.reverse();
console.log(masyvas); // reversine masyva

const x = masyvas.slice(1, 4); // apkarpo areju. Pradeda nuo 1 imtinai ir iki 4 neimtinai. Pirmas skaicius skliausteliuose nurodo pradzia, antras pabaiga. -1 nurodytu pirma nuo galo. -3 - paskutiniai 3(jei tik viena reiksme nurodai.) Jei pvz (-3, -1) - tada du skaicius.
console.log(x);

const y = masyvas.splice(2, 1); // pasalina nurodyto indexo skaicius.  Antras skaicius nurodo kiek skaiciu istrinti.
//taip pat gali iterpti naujus narius. pvz: masyvas.splice(2, 2, 'x'). vietoj ismestu, ideda nurodytus skaicius treciajame skaiciuje skliausteliuose.
console.log(y, masyvas);









