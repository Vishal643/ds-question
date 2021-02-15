function runProgram(input) {
	input = input.trim();

	var string_obj = {};
	for (var i = 0; i < input.length; i++) {
		var elem = input[i];
		var prev_val = string_obj[elem];
		if (prev_val == undefined) {
			string_obj[elem] = 1;
		} else {
			string_obj[elem] = prev_val + 1;
		}
	}
	for (i in string_obj) {
		if (string_obj[i] === 1) {
			console.log(i);
			return;
		}
	}
	console.log('Not Found');
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	aaaabbbbbcccccdddd`);
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
