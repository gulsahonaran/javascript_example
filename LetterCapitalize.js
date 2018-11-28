//str = "hello world"
//return "Hello World"
function LetterCapitalize(str) { 
  var newStr = "";
  str.split(" ").forEach(function(t){
      newStr = newStr + " "+ t[0].toUpperCase() + t.slice(1)
  })
  return newStr ; 
         
}
