var removeDuplicates = function(a) {
    let x = 0;
    for (let i=0; i<a.length; i++){
        if(a[i]>a[x]){
            x=x+1;
            a[x]=a[i];
        }
    }
    return x+1;
};

nums = [0,0,1,1,1,2,2,2,3,3,4]
console.log(removeDuplicates(nums));