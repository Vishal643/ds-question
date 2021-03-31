function nextGreaterFromRight(num, arr) {
	let stack = [];
	stack[0] = num - 1;
	let res = [];
	res[num - 1] = -1;
	for (let i = num - 2; i >= 0; i--) {
		while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
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
}
function runProgram(input) {
	input = input.trim().split('\n');
	let num_of_input = +input[0];
	let arr;
	let num;
	let j = 1;

	for (let i = 0; i < num_of_input; i++) {
		num = +input[j++].trim();
		arr = input[j++].trim().split(' ').map(Number);
		let next_greater_from_right = nextGreaterFromRight(num, arr);
		let sum = 0;
		for (let i = 0; i < next_greater_from_right.length; i++) {
			if (next_greater_from_right[i] === -1) {
				sum += 0;
			} else {
				sum += Number(arr[next_greater_from_right[i]]);
			}
		}
		console.log(sum);
	}
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    2
    4
    4 3 1 2
    4
    1 2 3 4`);
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
