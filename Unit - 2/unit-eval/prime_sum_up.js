function isPrime(num) {
	let count = 0;
	if (num === 1 || num === 0) {
		return false;
	}
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			count++;
		}
	}
	if (count > 2) {
		return false;
	} else {
		return true;
	}
}
function runProgram(input) {
	input = Number(input.trim());
	let primeSum = 0;
	for (let i = 0; i <= input; i++) {
		if (isPrime(i)) {
			primeSum += i;
		}
	}
	console.log(primeSum);
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`13`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding('ascii');
	let read = '';
	process.stdin.on('data', function (input) {
		read += input;
	});
	process.stdin.on('end', function () {
		read = read.replace(/\n$/, '');
		read = read.replace(/\n$/, '');
		runProgram(read);
	});
	process.on('SIGINT', function () {
		read = read.replace(/\n$/, '');
		runProgram(read);
		process.exit(0);
	});
}
