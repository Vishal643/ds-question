let stack = [];
let stackOfMin = [];
let top = -1;
let size = 0;
let min = Number.POSITIVE_INFINITY;
function push(elem) {
	top++;
	if (min > Number(elem)) {
		min = Number(elem);
		stackOfMin[top] = min;
	} else {
		stackOfMin[top] = min;
	}
	stack[top] = Number(elem);
	size++;
}

// function popStack() {
// 	if (top === -1) {
// 		return;
// 	} else {
// 		x = stack[top];
// 		top--;
// 		size--;
// 		return x;
// 	}
// }
function peek() {
	if (top === -1) return -1;
	return stackOfMin[top];
}

function getSize() {
	if (top === -1) return -1;
	return size;
}

function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input.shift().trim());
	let matrix = [];
	for (var i = 0; i < number_of_input; i++) {
		matrix.push(input[i].trim().split(' '));
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 'POP') {
				if (top === -1) console.log('EMPTY');
				else {
					// popStack();
					stack.pop();
					stackOfMin.pop();
					size--;
					top--;
				}
			} else if (matrix[i][j] === 'PUSH') {
				push(matrix[i][j + 1]);
			} else if (matrix[i][j] === 'MIN') {
				if (top === -1) {
					console.log('EMPTY');
				} else {
					console.log(peek());
				}
			}
		}
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    13
    MIN
    PUSH 92
    MIN
	PUSH 82
	POP
	POP
	MIN
	PUSH 10
	MIN
	POP
	MIN
	MIN
	POP`);
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
