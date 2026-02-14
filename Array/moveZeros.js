var moveZeroes = function(nums) {
    let x = 0;
    let len = nums.length;
    for (let i = 0 ; i< len; i++){
        if(nums[i] !== 0){
            nums[x] = nums[i];
            x++;
        }
    }
    for(let i = x; i < len; i++){
        nums[i] = 0;
    }
};