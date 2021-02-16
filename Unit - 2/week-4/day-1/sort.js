function runProgram(input) {
	input = input.trim().split('\n');
	let size = +input[0];
	let arr = input[1].trim().split(' ').map(Number);
	let indexArr = [];
	count = 0;
	for (let i = 0; i < size; i++) {
		indexArr.push(count++);
	}
	for (let i = 0; i < size - 1; i++) {
		for (let j = 0; j < size - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				swap(indexArr, j, j + 1);
			}
		}
	}
	let output = '';
	for (let i = 0; i < size; i++) {
		output += indexArr[i] + ' ';
	}
	console.log(output);
}

const swap = (arr, a, b) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
	return arr;
};
if (process.env.USER === 'vishal') {
	runProgram(`5
    4 5 3 7 1`);
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
