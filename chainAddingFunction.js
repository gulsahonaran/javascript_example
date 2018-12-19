function add(n){
  var f = function(x) { return add(n+x); };
  f.valueOf = function() { return n; };
  return f;
}
//add(1)(2)(3); ==> 6
//add(1)(2)(3)(4); ==> 10
//add(1)(2)(3)(4)(5); ==> 15
