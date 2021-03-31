function sum(arr, num) {
	if (num <= 0) {
		return 0;
	}
	return arr[num - 1] + sum(arr, num - 1);
}

function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input[0]);
	var j = 1;
	let matrix;
	for (var i = 0; i < number_of_input; i++) {
		let num = Number(input[j++]);
		matrix = input[j++].trim().split(' ').map(Number);
		let output = sum(matrix, num);
		console.log(output);
	}
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
	3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
