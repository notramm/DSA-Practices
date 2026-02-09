var removeElement = function(nums, val) {
    val = 2
    let x = 0;
    for (let i=0; i<nums.length; i++){
        if(nums[i] != val){
            nums[x]=nums[i];
            x=x+1;
        }
    }
    return x;
};

nums = [0,1,2,2,3,0,4,2]
console.log(removeElement(nums));