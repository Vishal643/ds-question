function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input[0]);

	var j = 1;
	for (var i = 0; i < number_of_input; i++) {
		let num = Number(input[j++]);
		let matrix = [];
		for (let k = 0; k < num; k++) {
			matrix[k] = input[j++].trim().split(' ').map(Number);
		}
		console.log(matrix);

		// Printing the first row
		let newStr = '';
		for (let a = 0; a < matrix.length - 1; a++) {
			newStr += matrix[0][a] + ' ';
		}

		//Printing diagonal down
		let k = matrix.length - 1;
		for (let m = 0; m < matrix.length - 1; m++) {
			newStr += matrix[m][k] + ' ';
			k--;
		}
		// Printing the last row
		let m = matrix.length - 1;
		for (let l = 0; l < matrix.length; l++) {
			newStr += matrix[m][l] + ' ';
		}
		// console.log(newStr);
	}
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    1
3
1 2 3
4 5 6
7 8 9`);
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
