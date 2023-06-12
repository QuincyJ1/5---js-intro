console.clear();
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function arrayPlusArray(arr1, arr2) {
    let sum = 0
   const array3 = arr1.concat(arr2);
     
     
     for (let i = 0; i < array3.length; i++) {
        sum += array3[i];
     }
     
     
    
     return sum//something went wrong
   }

   console.log(arrayPlusArray(arr1, arr2));
   console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));


   console.clear();
   const array = [1, 1, 1]

function findAverage(array) {
  // your code here
  let sum = 0;
  
  
for (let i = 0; i < array.length; i++ ) {
  sum += array[i]
}
  let average = sum / array.length
  
  
  return average;
   
}

console.log(findAverage([2, 4, 5]))
    