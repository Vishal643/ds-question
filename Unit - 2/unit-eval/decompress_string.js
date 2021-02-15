function isNumber(str) {
	let num = '0123456789';
	for (let i = 0; i < num.length; i++) {
		if (str === num[i]) return true;
	}
	return false;
}
function runProgram(input) {
	input = input.trim();
	let newStr = '';
	for (let i = 0; i < input.length; i++) {
		if (isNumber(input[i])) {
			for (let j = 0; j < Number(input[i]); j++) {
				newStr += input[i - 1];
			}
			// console.log(true);
		}
	}
	console.log(newStr);
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`a3b2`);
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
