//num = 12
//return 1+2+3+4+5+6+7+8+9+10+11+12 = 78

function SimpleAdding(num) { 
  if(num == 1){
      return 1;
  }
  else{
      return num + SimpleAdding(num-1)
  }
         
}
