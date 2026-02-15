// Sum of all element in an array using recursion
// arr=[9,6,7,3,4]
// function sum(n){
//     if(n==0) return arr[n];
//     return arr[n]+ sum(n-1);
// }
// console.log(sum(arr.length - 1));

// Sum of all odd element in an array using recursion
arr=[9,6,7,3,4]
function sum(n){
    isOdd = arr[n] % 2 !== 0;
    check = isOdd ? arr[n] : 0;
    if(n==0) return check;
    return check + sum(n-1);
}
console.log(sum(arr.length - 1));