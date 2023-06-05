console.clear();

const num1 = 15;
console.log(num1);

const num2 = 25;
console.log(num2);

const num3 = 40;
console.log(num3);

console.log('--------------')

const text1 = 'James'
console.log(text1);

const text2 = 'Mike';
console.log(text2);

const text3 = 'Junior';
console.log(text3);

console.log('-------------------')

const list1 = [22, 52, 67, 56, 78];
console.log(list1);

const list2 = [55, 43, 98, 95, 99];
console.log(list2);

const list3 = [123, 77, 89, 39, 51];
console.log(list3);

console.log('-----------------------')

const textlist1 = ['Jonas', 'Petras', 'Antanas', 'Algis', 'Vincas'];
console.log(textlist1);

const textlist2 = ['a', 'b', 'c', 'd', 'e'];
console.log(textlist2);

const textlist3 = ['q', 'w', 'e', 'r', 't'];
console.log(textlist3);

console.log('------------------------')


const sum1 = num1 + num2 + num3;
console.log(sum1);

console.log('------------------');

const sum2 = `${textlist1[0]} ${textlist1[1]} ${textlist1[2]} ${textlist1[3]} ${textlist1[4]} ${textlist2[0]} ${textlist2[1]} ${textlist2[2]} ${textlist2[3]} ${textlist2[4]} ${textlist3[0]} ${textlist3[1]} ${textlist3[2]} ${textlist3[3]} ${textlist3[4]}`;
console.log(sum2);


console.log('--------------------------')


const sum3 = list1[0] - list1[1] + list1[2] - list1[3] +list1[4];
const sum4 = list2[0] - list2[1] + list2[2] - list2[3] +list2[4];
const sum5 = list3[0] - list3[1] + list3[2] - list3[3] +list3[4];
console.log(sum3);
console.log(sum4);
console.log(sum5);



const sum6 = `${textlist1[0]}, ${textlist1[1]}, ${textlist1[2]}, ${textlist1[3]}, ${textlist1[4]}, ${textlist2[0]}, ${textlist2[1]}, ${textlist2[2]}, ${textlist2[3]}, ${textlist2[4]}, ${textlist3[0]}, ${textlist3[1]}, ${textlist3[2]}, ${textlist3[3]}, ${textlist3[4]}`;
console.log(sum6);


console.log('----------------------------')


function tusciaFunkcija() {
    return false
}
console.log(tusciaFunkcija());


console.log('----------------------')
const skaicius1 = 2;
const skaicius2 = 3;
const skaicius3 = 4;
function daugyba(skaicius1, skaicius2) {
return skaicius1 * skaicius2
}

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));