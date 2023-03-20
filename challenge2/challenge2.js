/*
    Hanna Hinn


    [0,1] --> 2 => sum(0-2) - sum(array)

*/  

function findMissing(nums) {
    const n = nums.length
    let sum = 0
    let fulSum = 0
    //Let's make sure the numbers of the array are unique
    //By adding a set and compare the size of the array to the set
    //if they are the same size them continue return error.
    if(n !== new Set(nums).size){
        return "Error"
    }
    
    // Let's iterate in the array since all the values are unique
    // and they are in the range of 0-n then we can assume that  
    // if we took the sum of all numbers 0-n minus sum of the 
    // numbers in the array will be equal to the missing number
   for(i = 0; i < n; i++){
        if (nums[i] >= 0 && nums[i] <= n){
            sum += nums[i]
        }else{
            return "Error"
        }
        fulSum += i+1
   }
    return (fulSum - sum)
}

console.log(findMissing([1,1,2,3]))
console.log(findMissing([0,1]))
console.log(findMissing([9,6,4,2,3,5,7,0,1]))
console.log(findMissing([3,0,1]))
console.log(findMissing([-3,0,1]))