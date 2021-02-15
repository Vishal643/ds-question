function runProgram(input) {
	input = input.trim().split('\n');
	let num_input = +input[0];
	let j = 1;
	let matrix;

	for (let i = 0; i < num_input; i++) {
		let size = +input[j++].trim();
		matrix = input[j++].trim().split(' ').map(Number);

		let count = 0;
		for (let m = 0; m < matrix.length - 1; m++) {
			for (let n = m + 1; n < matrix.length; n++) {
				if (n == m) {
					continue;
				}

				if (
					(m !== n && 2 * matrix[m] === 3 * matrix[n]) ||
					3 * matrix[m] === 2 * matrix[n]
				) {
					count++;
				}
			}
		}
		console.log(count);
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    2
    6
    6 6 6 4 4 4
    4
    0 0 0 0`);
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
