function runProgram(input) {
	input = Number(input.trim());
	let hours = Math.floor(input / 60);
	let minutes = input % 60;
	if (hours <= 1) {
		console.log(hours + 'hr' + ' ' + minutes + 'mins');
	} else if (minutes === 0) {
		console.log(hours + 'hrs' + ' ' + '00mins');
	} else {
		console.log(hours + 'hrs' + ' ' + minutes + 'mins');
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    120`);
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
