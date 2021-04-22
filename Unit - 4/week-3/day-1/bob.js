function helpBob(num) {
	if (num === 1 || num === 0) {
		return 1;
	}

	if (num === 3) {
		return 3;
	}
	if (num === 5) {
		return 5;
	}
	return helpBob(num - 1) + helpBob(num - 2) + helpBob(num - 5);
}

function runProgram(input) {
	input = Number(input.trim());
	console.log(helpBob(input));
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    7`);
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
