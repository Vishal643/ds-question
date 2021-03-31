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
	return stack[top];
}
function peek() {
	if (top === -1) return -1;
	return stack[top];
}

function runProgram(input) {
	input = input.split(/[\r\n]+/);
	let arr = input[1].trim().split(' ').map(Number);
	let outputstr = '';
	for (let i = 0; i < arr.length; i++) {
		while (top !== -1 && peek() >= arr[i]) {
			pop();
		}
		if (top === -1) {
			outputstr += '-1' + ' ';
		} else {
			outputstr += peek() + ' ';
		}
		push(arr[i]);
	}

	console.log(outputstr);
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`5
    5 4 1 3 2`);
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
