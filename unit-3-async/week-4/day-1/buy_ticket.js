let queue = [];
function enqueue(element) {
	queue.push(element);
}
function dequeue() {
	if (isEmpty()) return;
	return queue.shift();
}
function front() {
	if (isEmpty()) return;
	return queue[0];
}
function isEmpty() {
	return queue.length == 0;
}
function printQueue() {
	let str = '';
	for (let i = 0; i < queue.length; i++) {
		str += queue[i] + ' ';
	}
	return str;
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
			if (matrix[i][j] == 'E') {
				enqueue(matrix[i][j + 1]);
				console.log(queue.length);
			} else if (matrix[i][j] == 'D') {
				if (isEmpty()) {
					console.log(-1 + ' ' + queue.length);
				} else {
					x = dequeue();
					console.log(x + ' ' + queue.length);
				}
			}
		}
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	5
    E 2
    D
    D
    E 3
    D`);
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
