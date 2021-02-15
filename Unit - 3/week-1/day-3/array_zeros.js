const runProgram = (input) => {
	input = input.trim().split('\n');
	let arr = input[1].trim().split(' ').map(Number);
	let evenSum = 0,
		oddSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 1) oddSum += arr[i];
		else evenSum += arr[i];
	}

	console.log(oddSum === evenSum ? 'YES' : 'NO');
};

if (process.env.USERNAME === 'vishal') {
	runProgram(`2
    2 2`);
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
