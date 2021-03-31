let stack = [];
let size = 0,
	top = -1;

function push(element) {
	top++;
	size++;
	stack[top] = element;
}
function pop() {
	if (top === -1) return;
	let x = stack[top];
	top--;
	size--;
	return x;
}

function peek() {
	if (top === -1) return;
	return stack[top];
}
function getSize() {
	if (top === -1) return;
	return size;
}

function Precedence(char) {
	switch (char) {
		case '+':
		case '-':
			return 1;

		case '*':
		case '/':
			return 2;

		case '^':
			return 3;
	}
	return -1;
}

function isLetter(c) {
	let char = 'abcdefghijklmnopqrstuvwxyz';
	let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < char.length; i++) {
		if (c === char[i] || c === upperChar[i]) {
			return true;
		}
	}
	return false;
}
function isNumber(c) {
	let num = '0123456789';
	for (let i = 0; i < num.length; i++) {
		if (c === num[i]) {
			return true;
		}
	}
	return false;
}

function infixToPostfix(input) {
	let result = '';
	for (let i = 0; i < input.length; i++) {
		let char = input.charAt(i);

		if (isLetter(char) || isNumber(char)) {
			result += char;
		} else if (char == '(') {
			push(char);
		} else if (char == ')') {
			while (top !== -1 && peek() != '(') {
				result += pop();
			}
			pop();
		} else {
			while (top !== -1 && Precedence(char) <= Precedence(peek())) {
				result += pop();
			}
			push(char);
		}
	}

	while (top !== -1) {
		if (peek() == '(') return;
		result += pop();
	}
	return result;
}
function runProgram(input) {
	input = input.trim();
	let result = infixToPostfix(input);
	console.log(result);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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
