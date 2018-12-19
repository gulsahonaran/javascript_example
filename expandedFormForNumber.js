function expandedForm(num) {
  var str = [];
  num = num.toString().split('')
  num.map((x , i) =>  (x != 0) ? str.push( x + Array(num.length - i -1).fill(0).join('')) : "");
  return str.join(' + ');
}

//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'
