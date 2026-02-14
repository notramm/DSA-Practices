var findMaxConsecutiveOnes = function(nums) {
    let curr = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            curr++
            
        }else{
            maxCount = Math.max(curr, maxCount)
            curr = 0;
        }
    }
    return Math.max(maxCount, curr);
};