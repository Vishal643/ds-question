const findNextGreatest = (arrLength, arr) => {
	let stack = [];
	stack[0] = arrLength - 1;
	let res = [];
	res[arrLength - 1] = -1;
	for (let i = arrLength - 2; i >= 0; i--) {
		while (stack.length != 0 && arr[stack[stack.length - 1]] <= arr[i]) {
			stack.pop();
		}
		if (stack.length == 0) {
			res[i] = -1;
		} else {
			res[i] = stack[stack.length - 1];
		}
		stack.push(i);
	}
	return res;
};

function runProgram(input) {
	input = input.trim().split('\n');
	let number_of_input = Number(input[0]);

	var j = 1;
	let arr;
	for (var i = 0; i < number_of_input; i++) {
		let num = Number(input[j++]);
		arr = input[j++].trim().split(' ').map(Number);
		let nextGreatestNumbers = findNextGreatest(arr.length, arr);
		let evenSum = 0;
		for (let k = 0; k < nextGreatestNumbers.length; k++) {
			if (arr[nextGreatestNumbers[k]] % 2 === 0) {
				evenSum += arr[k];
			}
		}
		console.log(evenSum);
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    1
    5
    2 3 5 8 3
    `);
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
