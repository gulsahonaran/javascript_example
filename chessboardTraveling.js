// "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and 
//(a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. 

//Your program should determine how many ways there are of traveling from (x y) on the board to (a b) 
//moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 
//because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) 
//while making only moves up and to the right.

function ChessboardTraveling(str) { 

  var regEx = /^\(\d\s\d\)\(\d\s\d\)/;
  if(regEx.test(str)){
      var horizontalS = parseInt(str[8],10) - parseInt(str[3], 10);
      var verticalS = parseInt(str[6],10)- parseInt(str[1],10);
    return fact(horizontalS + verticalS) / (fact(verticalS) * fact(horizontalS)); //path difference is found with repetitive permutation

  }else{
      return "is not true format";
  }
}
   
function fact(n){
     return n === 0 ? 1 : n * fact(n -1);
}
