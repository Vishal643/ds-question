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
		return;
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

function runProgram(input) {
	input = input.trim();
	let output = '';
	//njjjj
	push(input[0]);
	for (let i = 1; i < input.length; i++) {
		if (top !== -1 && input[i] === peek()) {
			pop();
		} else {
			push(input[i]);
		}
	}
	if (size === 0) {
		console.log('Empty String');
		return;
	}
	for (let i = 0; i < stack.length; i++) {
		output += stack[i];
	}
	console.log(output);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`njjjj`);
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
