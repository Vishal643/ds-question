function runProgram(input) {
	input = input.trim().split('\n');
	let stack = [],
		ansArr = [],
		number = 1,
		top,
		peek,
		i = 0,
		n;
	while (true) {
		n = Number(input[i++]);
		top = n - 1;
		peek = -1;
		stack = [];
		ansArr = [];
		number = 1;
		if (n === 0) return;
		stack = input[i++].trim().split(' ').reverse().map(Number);
		while (true) {
			if (number === n + 1) break;
			if (number === stack[top]) {
				stack.pop();
				top--;
				number++;
			} else if (number === ansArr[peek] && peek !== -1) {
				ansArr.pop();
				peek--;
				number++;
			} else if (top !== -1) {
				ansArr.push(stack.pop());
				top--;
				peek++;
			} else {
				break;
			}
		}

		console.log(peek === -1 ? 'yes' : 'no');
	}
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    5
    5 1 2 4 3 
    0`);
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
