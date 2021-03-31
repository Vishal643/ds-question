let count = 0;
function sumOfDigits(n) {
	if (n < 10) {
		return ++count;
	} else {
		count++;
		sumOfDigits(Math.floor(n / 10));
	}

	return count;
}

console.log(sumOfDigits(9999));
