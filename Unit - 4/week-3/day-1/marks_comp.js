let stack = [];
let top = -1;
let size = 0;

function push(elem) {
	top++;
	stack[top] = elem;
	size++;
}

function popStack() {
	if (top === -1) {
		return;
	} else {
		x = stack[top];
		top--;
		size--;
		return x;
	}
}
function peek() {
	if (top === -1) return -1;
	return stack[top];
}

function getSize() {
	if (top === -1) return -1;
	return size;
}

function runProgram(input) {
	input = input.split(/[\r\n]+/);
	let size = Number(input[0]);
	let arr = input[1].trim().split(' ').map(Number);
	let output = '';
	for (let i = 0; i < size; i++) {
		let j;
		for (j = i + 1; j < size; j++) {
			if (arr[i] < arr[j]) break;
		}
		if (j === size) output += arr[i] + ' ';
	}
	console.log(output);
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
