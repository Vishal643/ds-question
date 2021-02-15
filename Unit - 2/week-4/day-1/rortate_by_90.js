const runProgram = (input) => {
	input = input.trim().split('\n');
	let dim = input.shift().trim().split(' ').map(Number);
	let row = dim[0];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split(' ').map(Number);
	}
	for (let i = 0, k = matrix[0].length - 1; i < matrix.length; i++, k--) {
		let temp = '';
		for (let j = 0; j < matrix[0].length; j++) {
			temp += matrix[j][k] + ' ';
		}
		console.log(temp.trim());
	}
};

if (process.env.USERNAME === 'vishal') {
	runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
