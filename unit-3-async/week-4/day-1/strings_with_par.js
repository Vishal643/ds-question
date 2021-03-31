let stack = [];
function checkParanthesis(input) {
	for (let i = 0; i < input.length; i++) {
		if (input[i] == '(' || input[i] == '[' || input[i] == '{') {
			stack.push(input[i]);
			continue;
		}
		if (stack.length === 0) return false;
		let stackTop;
		switch (input[i]) {
			case ')':
				stackTop = stack.pop();
				if (stackTop == '{' || stackTop == '[') return false;
				break;

			case '}':
				stackTop = stack.pop();
				if (stackTop == '(' || stackTop == '[') return false;
				break;

			case ']':
				stackTop = stack.pop();
				if (stackTop == '(' || stackTop == '{') return false;
				break;
		}
	}

	return stack.length === 0;
}
function runProgram(input) {
	input = input.trim();
	console.log(checkParanthesis(input) ? 'balanced' : 'unbalanced');
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`(((((((((())))))))))`);
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
