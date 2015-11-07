/* A palindromic number reads the same both ways. The largest palindrome made 
from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.*/

//start by getting the products of three digit numbers 


var palindromes = [];

for( var i = 999; i>=600; i--) {
	for( var j = 999; j>=600; j--) {
			var product = (i*j);
			var productString = JSON.stringify(product); 
		
			if (checkPalindrome(productString) === true) {
				palindromes.push(productString);
				break
			}
	}	
}

function checkPalindrome(num) {    
    var l = num.length;
    for (var i = 0; i < l / 2; i++) {
        if (num.charAt(i) !== num.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}



console.log(Math.max.apply( Math, palindromes));


