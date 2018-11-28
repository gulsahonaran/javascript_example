//Find to Longest Word
function LongestWord(str) {
  
  str = str.trim();//this method removes whitespace from both sides of a string.
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")//this method removes punctuations 
  
  var strArry = str.split(' ');//this method separates words
  
  strArry.sort(function(a, b) {return b.length - a.length});//this method sorts word by word length
  
  return strArry[0];

         
}
