let stack = [];

function checkParenthesi(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i] === '(' || matrix[i] === '{' || matrix[i] === '[') {
			stack.push(matrix[i]);
			continue;
		}

		console.log(stack);
		if (stack.length === 0) {
			return false;
		}

		let stackTop;
		switch (matrix[i]) {
			case ')': {
				stackTop = stack[stack.length - 1];
				if (stackTop === '{' || stackTop === '[') {
					return false;
					break;
				}
			}
			case '}': {
				stackTop = stack[stack.length - 1];
				if (stackTop === '(' || stackTop === '[') {
					return false;
					break;
				}
			}
			case ']': {
				stackTop = stack[stack.length - 1];
				if (stackTop === '{' || stackTop === '(') {
					return false;
					break;
				}
			}
		}
	}
	return stack.length === 0;
}

function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input[0]);

	let matrix = [];
	for (var i = 1; i <= number_of_input; i++) {
		matrix = input[i].trim();

		console.log(checkParenthesi(matrix) ? 'balanced' : 'not balanced');
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    3
    {([])}
    ()
    ([]`);
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
