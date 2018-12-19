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
