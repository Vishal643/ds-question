function fact(num) {
	if (num === 1) {
		return 1;
	}
	return num * fact(num - 1);
}

function runProgram(input) {
	input = +input.trim();
	let factorial = fact(input);
	console.log(factorial);
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	5`);
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
