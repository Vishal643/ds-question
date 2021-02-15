function runProgram(input) {
	input = input.trim().split('\n');
	var arr = input[1].trim().split(' ').map(Number);
	let max = 0;
	let count = 0;
	let num = undefined;
	let flag = false;
	for (let i = 0; i < arr.length; i++) {
		if (flag) {
			if (arr[i] === num) {
				count++;
				continue;
			} else {
				flag = false;
				if (count > max) max = count;
			}
		}
		if (arr[i] % 2 === 1) {
			num = arr[i];
			count = 1;
			flag = true;
		}
	}
	if (count > max) max = count;
	console.log(max);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
	12
	1 1 1 1 2 2 2 2 2 1 1 1`);
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
