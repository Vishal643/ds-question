let stack = [];
let top = -1;
let size = 0;

function pushOnStack(elem) {
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
	input = input.trim().split('\n');
	let num_input = +input[0];
	let j = 1;
	let arr;

	for (let i = 0; i < num_input; i++) {
		let size = +input[j++].trim();

		arr = input[j++].trim().split(' ').map(Number);
		let arr1 = new Array(arr.length);
		let outputStr = '';

		for (let k = arr.length - 1; k >= 0; k--) {
			while (top !== -1 && peek() <= arr[k]) pop();

			if (top === -1) arr1[k] = -1;
			else arr1[k] = peek();

			pushOnStack(arr[k]);
		}

		for (let k = 0; k < arr.length; k++) outputStr += arr1[k] + ' ';
		console.log(outputStr);
	}
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
	1
	5
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
