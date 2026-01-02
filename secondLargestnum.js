let  arr = [1, 2, 3, 14, 5, 7, 6, 9, 12];

function SecoundLargest(arr){

  let firstlargest = arr[0];
  let secondlargest = arr[0];

  for (let i = 0; i< arr.length; i++){
    if (arr[i] > firstlargest){
        secondlargest = firstlargest;
        firstlargest = arr[i];
    }
    else if(arr[i] > secondlargest && arr[i] != firstlargest){
        secondlargest = arr[i];
    }
  }
  return secondlargest; 
}

console.log(SecoundLargest(arr));
