let  arr = [1, 2, 3, 14, 5, 7, 6, 9, 20, 12];

let firstlargest = arr[0];
let secondlargest = arr[0];

function SecoundLargest(arr){

  for (let i = 0; i< arr.length; i++){
    if (arr[i] > firstlargest){
        firstlargest = arr[i];
        for (let j = 0; j < i; j++){
            if (secondlargest < arr[j]){
                secondlargest = arr[j];
            }
        }
    }
  }
  return secondlargest; 
}

console.log(SecoundLargest(arr));

// function SecoundLargest(arr){

//   for (let i = 0; i< arr.length; i++){
//     if (arr[i] > firstlargest){
//         secondlargest = firstlargest;
//         firstlargest = arr[i];
//     }
//     else if(arr[i] > secondlargest){
//         secondlargest = arr[i];
//     }
//   }
//   return secondlargest; 
// }

// console.log(SecoundLargest(arr));
