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
function peek() {
	if (top === -1) return -1;
	return stack[top];
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
		matrix.push(input[i].trim().split(' ').map(Number));
	}

	let topElement;
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][0] == 1) {
			if (top === -1) console.log('No Food');
			else {
				topElement = peek();
				pop();
				console.log(topElement);
			}
		} else if (matrix[i][0] == 2) {
			push(matrix[i][1]);
		}
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	6
1
2 5
2 7
2 9
1
1`);
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
