function test(n) {
	if (n < 2) {
		return 1;
	}
	return n + ' ' + test(n - 1);
}
let outputStr = test(10);
console.log(outputStr.split(' ').reverse().join(' '));
