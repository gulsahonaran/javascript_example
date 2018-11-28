//Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits.
//Your program should perform the following routine on the number:
  //Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number),
  //and subtract the smaller number from the bigger number. Then repeat the previous step. 
//Performing this routine will always cause you to reach a fixed number: 6174.
//Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). 
//Your program should return the number of times this routine must be performed until 6174 is reached. 
//For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 

function KaprekarsConstant(num) { 

  var kapConst = 6174;
  var count = 0;
  while (true) {
      var num = calc(num)
      if (num === true) {
          return count;
      }
    }
  
  function calc(n){// n= 5432
      count ++;
      var minArry = num.toString().split('').sort();// ["2", "3", "4", "5"]
      var maxArry = minArry.slice(0).reverse();// ["5", "4", "3", "2"]
      var littleNum = parseInt(minArry.join(''), 10);//2345
      var bigNum = parseInt(maxArry.join(''), 10);//5432
      while (bigNum < 1000) {
        bigNum = bigNum * 10;
      }

    return ((bigNum - littleNum === kapConst) ? true : bigNum - littleNum);//3087
      
  }
         
}
