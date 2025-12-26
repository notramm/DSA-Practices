// Searching an element in an array and return its index
// function searchElement(arr, target){
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] == target){
//       return i;
//     }
//   }
//   return -1;
// }
// arr = [1, 6, 8, 9, 3, 4, 5, 7, 2, 0];
// console.log(searchElement(arr, 4));

// Count negative numbers in an array
// let arr = [ -1, 8, 5, -2, 9, -3, 0, 7, 6, -4, 2, 1, 4, 3 ];

// let count = 0;
// function segregateNegative(arr){
//   for (let i = 0; i < arr.length; i++ ){
//     if(arr[i]< 0){
//       count++;
//       console.log(`${arr[i]} and index is ${i}` );
//     }
//   }
//   return count;
// }

// console.log(segregateNegative(arr));


// Find the largest element in an array
let  arr = [1, 2, 3, 4, 5, 10, 6, 9, 20, 12];

let largest = -1;

function LargestElement(arr){

  for (let i = 0; i< arr.length; i++){
    if (arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest; 
}

console.log(LargestElement(arr));