function reverse(val) {
	return val.split('').reverse().join('')
} 

function add(a, b) {
	var rBig, rSmall;
	if ( Number(a) < Number(b) )  {
		rBig = reverse(b);
		rSmall = reverse(a);
	} else {
		rBig = reverse(a);
		rSmall = reverse(b);
	}

	var carry = 0, digit = 0, total = '';

	for (var i = 0; i < rBig.length; i ++) {
		digit = Number(rBig[i]) + (Number(rSmall[i]) || 0) + carry;
		carry = (digit > 9) ? Math.floor(digit / 10) : 0;
		total = ( String(digit > 9 ? digit % 10 : digit) ).concat(total);
	}

	// handle last carry if any
	if (carry == 1) {
		total = ('1').concat(total);
	}
	// while first digits are '0' pop them off
	while (total[0] === '0') total = total.slice(1);
	return total;
}

//We need to sum big numbers and we require your help.
//Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
//add("123", "321"); ==> "444"
//add("11", "99"); ==> "110"
//add('987429134712934876249385134781395873198472398562384958739845234859234758913759182357398457398474598237459823745928347538',
              '835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789') ==> '1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327'
