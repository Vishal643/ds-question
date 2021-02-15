let stack = [];
let top = -1;
let size = 0;
function push(elem) {
	top++;
	stack[top] = elem;
	size++;
	// return stack[top];
}

//  3
// 	2
// 	3
// 	1 3
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
	if (top === -1) return 'Empty!';
	return stack[top];
}

function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input.shift().trim());
	let matrix = [];
	for (var i = 0; i < number_of_input; i++) {
		matrix.push(input[i].trim().split(' ').map(Number));
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				push(matrix[i][j + 1]);
				break;
			} else if (matrix[i][j] === 2) {
				pop();
			} else if (matrix[i][j] === 3) {
				console.log(getSize(matrix[i][j]));
			}
		}
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	3
	2
	3
	1 3`);
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
