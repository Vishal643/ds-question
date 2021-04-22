function runProgram(input) {
	input = input.trim().split('\n');

	let matrix1 = input[1].trim().split(' ').map(Number);
	let matrix2 = input[2].trim().split(' ').map(Number);
	let commontMatrix = [...matrix1, ...matrix2];
	for (let i = 0; i < commontMatrix.length; i++) {
		for (let j = i + 1; j < commontMatrix.length; j++) {
			if (commontMatrix[i] > commontMatrix[j]) {
				let temp = commontMatrix[i];
				commontMatrix[i] = commontMatrix[j];
				commontMatrix[j] = temp;
			}
		}
	}
	console.log(commontMatrix.join(' '));
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	4
    1 5 7 9
    2 4 6 8`);
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
