snail = function(sen) {
  var result = [];

  while (sen.length>0){
    //grab the first row
    result = result.concat.apply(result,sen.splice(0,1));

    //grab the last column
    for (var i=0;i<=sen.length-1;i++)
    {
      result = result.concat(sen[i].splice(sen.length));
    }

    //grab the last row
    var temp = [].concat.apply([],sen.splice(sen.length-1)).reverse();
    result = result.concat.apply(result,temp);

    //grab the first column
    for (var i=sen.length-1;i>=0;i--)
    {
      result = result.concat(sen[i].splice(0,1));
    }
  }
  return result; 
}
//array = [[1,2,3],
//         [8,9,4],
//         [7,6,5]]
//snail(array) #=> [1,2,3,4,5,6,7,8,9]
