function runProgram(input) {
	input = input.trim().split('\n');
	let num_input = +input.shift();

	let matrix = [];
	for (let i = 0; i < num_input; i++) {
		matrix.push(input[i].trim().split(' ').map(Number));
	}
	let stack = [];
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][0] === 1) {
			stack.push(matrix[i][1]);
		} else if (matrix[i][0] === 2) {
			// if (stack.length === 0) {
			// 	return -1;
			// } else {
			stack.pop();
			// }
		} else if (matrix[i][0] === 3) {
			if (stack.length === 0) {
				console.log('Empty!');
			} else {
				console.log(stack[stack.length - 1]);
			}
		}
	}
}

if (process.env.USER === 'vishal') {
	runProgram(`
    3
    2
    3
    1 3`);
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
