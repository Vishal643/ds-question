function runProgram(input) {
	input = input.trim().split(' ').map(Number);

	for (let i = 0; i < input.length; i++) {
		let sum = 0;

		for (let j = i; j < input.length; j++) {
			sum += input[j];

			if (sum === 0) {
				console.log(i, j);
			}
		}
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    6 3 -1 -3 4 -2 2 4 6`);
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
