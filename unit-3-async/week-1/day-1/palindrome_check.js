function toLowerCase(str) {
	let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < upperChar.length; j++) {
			if (str[i] === upperChar[j] || str[i] === lowerChar[j]) {
				newStr += lowerChar[j];
			}
		}
	}
	return newStr;
}

function runProgram(input) {
	input = input.trim();
	let reversed_str = '';
	let original_str = '';
	for (let i = 0; i < input.length; i++) {
		original_str += toLowerCase(input[i]);
	}
	for (let i = original_str.length - 1; i >= 0; i--) {
		reversed_str += original_str[i];
	}
	if (reversed_str === original_str) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	Too hot to hoot.`);
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
