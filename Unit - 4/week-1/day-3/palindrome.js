function palindrome(input, num) {
	if (num == 1) {
		return input[0];
	}
	return input[num - 1] + palindrome(input, num - 1);
}

function runProgram(input) {
	input = input.trim();
	console.log(input === palindrome(input, input.length) ? 'YES' : 'NO');
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`naman`);
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
