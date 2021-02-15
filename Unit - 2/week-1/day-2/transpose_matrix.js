function runProgram(input) {
	input = input.trim().split('\n');
	let dim = input.shift().trim().split(' ').map(Number);
	let row = dim[0];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split(' ').map(Number);
	}
	let transpose = [];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
			if (transpose[j] === undefined) {
				transpose[j] = [];
			}
			transpose[j][i] = matrix[i][j];
		}
	}
	transpose.forEach(function (row) {
		console.log(row.join(' '));
	});
}

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
