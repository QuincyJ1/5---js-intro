console.clear();

import { Student } from './Student.js';


const petras = new Student ('Petras', 2000);
const maryte = new Student ('Maryte', 1980);//  sukuriami objektai. 

petras.addMark(8);
maryte.addMark(9);
petras.addMark(8);
maryte.addMark(-2);
petras.addMark(6);
maryte.addMark(9);
petras.addMark(8);
maryte.addMark(9);

console.log(petras.name, petras.marks, petras.marksAverage());

console.log(maryte.name,  maryte.marks, maryte.marksAverage());





