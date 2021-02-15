function runProgram(input) {
	input = input.trim().split('\n');
	let num = +input.shift();
	let a = input.map((el) => el.trim().split(' ')).map((el) => [el[0], +el[1]]);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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
