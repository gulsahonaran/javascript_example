var maxSequence = function(arr){
 var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) ==>  6
//maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]) ==> 0
