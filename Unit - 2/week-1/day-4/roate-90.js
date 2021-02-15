function runProgram(input) {
	input = input.trim().split('\n');
	let dim = input.shift().trim().split(' ').map(Number);
	let row = dim[0];

	let matrix = [];
	for (let i = 0; i < row; i++) {
		matrix[i] = input[i].trim().split(' ').map(Number);
	}

	for (var i = 0, k = matrix.length - 1; i < matrix.length; i++, k--) {
		var temp = '';
		for (var j = 0; j < matrix[0].length; j++) {
			temp += matrix[j][k] + ' ';
		}
		console.log(temp.trim());
	}
}

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
