function length(str) {
	if (str === '') {
		return 0;
	} else {
		return length(str.substring(1)) + 1;
	}
}

function runProgram(input) {
	input = input.trim();
	console.log(length(input));
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    masaischool
   `);
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
