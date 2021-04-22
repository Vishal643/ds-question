function runProgram(input) {
	input = input.trim().split('\n');
	let num_input = Number(input[0]);

	let j = 1;
	for (let i = 0; i < num_input; i++) {
		let str1 = input[j++];
		let str2 = input[j++];
		let num = input[j++];
		for (let k = str1.length; k > 0; k--) {
            
        }
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	3
    abb
    abc
    2
    abb
    acb
    7
    abc
    acb
    1`);
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
