function birthDay(n, k, currElem, arr) {
	if (arr.length === k) {
		console.log(arr.join(' '));
		return;
	}
	for (let i = currElem; i <= n; i++) {
		arr.push(i);
		birthDay(n, k, i + 1, arr);
		arr.pop();
	}
}

function runProgram(input) {
	input = input.trim().split('\n');
	let mat = input[0].trim().split(' ').map(Number);
	let n = mat[0];
	let k = mat[1];

	let currElem = 1;
	let arr = [];
	birthDay(n, k, currElem, arr);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    4 2`);
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
