function runProgram(input) {
	input = input.trim().split('\n');
	let mat_num = Number(input[0]);

	var j = 1;
	for (var i = 0; i < mat_num; i++) {
		let dim = Number(input[j++]);
		let matrix = [];
		for (let k = 0; k < dim; k++) {
			matrix[k] = input[j++].trim().split(' ').map(Number);
		}

		let transpose = [];
		for (var l = 0; l < matrix.length; l++) {
			for (var m = 0; m < matrix[0].length; m++) {
				if (transpose[m] === undefined) {
					transpose[m] = [];
				}
				transpose[m][l] = matrix[l][m];
			}
		}
		transpose.forEach(function (row) {
			console.log(row.join(' '));
		});
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    2 3 5 6
    4 5 7 9
    8 6 4 9
    1 3 5 6`);
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
