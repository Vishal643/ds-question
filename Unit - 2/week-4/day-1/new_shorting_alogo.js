function runProgram(input) {
	input = input.trim().split('\n');
	let dim = input[0].split(' ').map(Number);
	let mod = dim[1];
	let arr = input[1].trim().split(' ').map(Number);

	let i, j, temp;
	for (i = arr.length; i > 1; i--) {
		for (j = 0; j < i - 1; j++) {
			if (arr[j] % mod > arr[j + 1] % mod) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log(arr.join(' '));
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`5 6
12 18 17 65 46`);
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
