function mul(arr, num) {
	if (num <= 0) {
		return 1;
	}
	return arr[num - 1] * mul(arr, num - 1);
}

function runProgram(input) {
	input = input.trim().split('\n');
	let matrix = input[1].trim().split(' ').map(Number);
	console.log(mul(matrix, matrix.length));
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    5
    6 3 8 2 -4
   `);
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
