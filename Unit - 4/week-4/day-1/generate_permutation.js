function swap(arr, startIndex, endIndex) {
	let temp;
	temp = arr[startIndex];
	arr[startIndex] = arr[endIndex];
	arr[endIndex] = temp;
	return arr;
}

function generatePermutation(arr, startIndex, endIndex) {
	if (startIndex === endIndex) {
		console.log(arr.join(' '));
	} else {
		for (let i = startIndex; i <= endIndex; i++) {
			arr = swap(arr, startIndex, i);
			generatePermutation(arr, startIndex + 1, endIndex);
			arr = swap(arr, startIndex, i);
		}
	}
}

function runProgram(input) {
	input = input.trim().split('\n');
	let matrix = input[1].trim().split(' ');
	let startIndex = 0;
	let endIndex = matrix.length - 1;
	generatePermutation(matrix, startIndex, endIndex);
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
	3
    1 2 3`);
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
