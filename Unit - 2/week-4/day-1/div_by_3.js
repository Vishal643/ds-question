function runProgram(input) {
	input = input.trim().split('\n');
	let dim = input.shift().trim().split(' ').map(Number);
	let row = dim[0];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split(' ').map(Number);
	}
	let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] % 3 === 0) sum += matrix[i][j];
		}
	}
	console.log(sum);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`2 3
    3 1 8
    2 6 0`);
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
