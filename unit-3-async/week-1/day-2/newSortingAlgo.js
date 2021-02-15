function runProgram(input) {
	input = input.trim().split('\n');
	let k = input[0].trim().split(' ').map(Number)[1];
	let arr = input[1].trim().split(' ').map(Number);
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] % k > arr[j + 1] % k) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log(arr.join(' '));
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    5 6
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
