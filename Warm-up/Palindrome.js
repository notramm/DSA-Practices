var isPalindrome = function(x) {
    if (x<0) return false;
    let rev = 0;
    let xCopy = x;

    while(x>0){
        let rem = x%10;
        rev= (rev*10)+rem;
        x = Math.floor(x/10);
    }
    return rev === xCopy;
};

x = 1211
console.log(isPalindrome(x));