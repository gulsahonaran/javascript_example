//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


function LetterChanges(str) { 

  // code goes here
  var t = str.split('');
  var newStr = '';
  t.forEach(function(t){
      var letters = /^[A-Za-z]+$/;
      var vowels =/^[A,I,E,U,O,a,e,i,u,o]+$/;
      var temp = String.fromCharCode(t.charCodeAt()+1);
      if(t.match(letters)){
          if(temp.match(vowels)){
            newStr = newStr + temp.toUpperCase()
          }else{
              
            newStr = newStr + temp
          }
      }else{
          newStr = newStr + t
      }
      
  })
  return newStr; 
         
}
