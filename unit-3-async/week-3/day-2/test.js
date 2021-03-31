let stack = [];
let top = -1;
let size = 0;

function push(elem) {
	top++;
	stack[top] = elem;
	size++;
}

function pop() {
	if (top === -1) {
		return -1;
	} else {
		x = stack[top];
		top--;
		size--;
		return x;
	}
}

function getSize() {
	if (top === -1) return -1;
	return size;
}
function peek() {
	if (top === -1) return -1;
	return stack[top];
}

function checkParanthesis(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i] == '(' || matrix[i] == '[' || matrix[i] == '{') {
			push(matrix[i]);
			continue;
		}
		if (top === -1) return false;
		let stackTop;
		switch (matrix[i]) {
			case ')':
				stackTop = pop();
				if (stackTop == '{' || stackTop == '[') return false;
				break;

			case '}':
				stackTop = pop();
				if (stackTop == '(' || stackTop == '[') return false;
				break;

			case ']':
				stackTop = pop();
				if (stackTop == '(' || stackTop == '{') return false;
				break;
		}
	}

	return top === -1;
}
function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input.shift().trim());
	let matrix = '';
	for (let k = 0; k < number_of_input; k++) {
		matrix += input[k].trim();
		console.log(checkParanthesis(matrix) ? 'balanced' : 'not balanced');
		for (let i = 0; i < matrix.length; i++) {
			pop();
		}
		matrix = '';
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(` 3
    {([])}
    ()
    ([]
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
