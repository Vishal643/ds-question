function runProgram(input) {
	input = input.trim();
	let stack = [];

	for (let i = 0; i < input.length; i++) {
		let len = stack.length - 1;

		if (stack.length == 0 || stack[len] !== input[i]) {
			stack.push(input[i]);
		} else {
			stack.pop();
		}
	}

	console.log(stack.length == 0 ? 'Empty String' : stack.join(''));
}

if (process.env.USER === 'vishal') {
	runProgram(`aaabccddd`);
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
