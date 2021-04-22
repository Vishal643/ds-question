function subString(str, curr, index) {
	if (index === str.length) {
		console.log(curr);
		return;
	}
	subString(str, curr, index + 1);
	curr += str[index];
	subString(str, curr, index + 1);
}

function runProgram(input) {
	input = input.trim().split('\n');

	let string = input[1].trim();
	let index = 0;
	let curr = '';

	subString(string, curr, index);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    4
    abcd`);
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
