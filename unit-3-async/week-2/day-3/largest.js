function runProgram(input) {
	input = input.split(/[\r\n]+/);
	let arr = input[1].trim().split(' ').map(Number);
	let stack = [];
	for (let i = 0; i < arr.length; i++) {
		if (stack.length === 0 || stack[stack.length - 1] >= input[i]) {
			stack.push(input[i]);
		} else {
			stack.pop();
		}
	}

	console.log(stack.join(' '));
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`6
    16 17 4 3 5 2`);
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
