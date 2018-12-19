function rgb(r, g, b){
  // check 0 <a <255 
  r = (r > 255) ? 255 : (r<0) ? 0 : r;
  g = (g > 255) ? 255 : (g<0) ? 0 : g;
  b = (b > 255) ? 255 : (b<0) ? 0 : b;
  //create array
  let hexArry = [r,g,b]
  // 245.toString(16) = "f5"
  return hexArry.map(x => (x.toString(16).length < 2 ) 
        ? x.toString(16)+x.toString(16) : x.toString(16) ).join('').toUpperCase()
}

//rgb(255, 255, 255) // returns FFFFFF
//rgb(255, 255, 300) // returns FFFFFF
//rgb(0,0,0) // returns 000000
//rgb(148, 0, 211) // returns 9400D3
