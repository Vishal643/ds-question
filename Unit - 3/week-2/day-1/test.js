function runProgram(input) {
	input = input.trim().split('\n');
	let num_input = +input[0];
	let j = 1;
	let matrix;

	for (let i = 0; i < num_input; i++) {
		let size = +input[j++].trim();
		matrix = input[j++].trim().split(' ').map(Number);

		let output = '';
		let next_elem, k;
		for (let m = 0; m < size; m++) {
			next_elem = -1;
			for (k = m + 1; k < size; k++) {
				if (matrix[m] > matrix[k]) {
					next_elem = matrix[k];
					break;
				}
			}
			output += next_elem + ' ';
		}
		console.log(output);
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	1
	4
	3 7 1 7`);
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
