function fib(input, num) {
	if (num == 1) {
		return input[0];
	}
	return fib(input, num - 1) + fib(input, num - 2);
}

function runProgram(input) {
	input = input.trim();
	console.log(input === fib(input, input.length) ? 'YES' : 'NO');
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    1`);
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
