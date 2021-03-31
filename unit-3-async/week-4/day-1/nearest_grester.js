function nextGreaterFromRight(num, arr) {
	let stack = [];
	stack[0] = num - 1;
	let res = [];
	res[num - 1] = -1;
	for (let i = num - 2; i >= 0; i--) {
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
}

function nextGreaterFromLeft(num, arr) {
	let outputstr = '';
	let stack = [];
	for (let i = 0; i < num; i++) {
		while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
			stack.pop();
		}
		if (!stack.length) {
			outputstr += '-1' + ' ';
		} else {
			outputstr += stack[stack.length - 1] + ' ';
		}
		stack.push(i);
	}
	return outputstr.trim().split(' ').map(Number);
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

		let next_greater_from_left = nextGreaterFromLeft(num, arr);
		let next_greater_from_right = nextGreaterFromRight(num, arr);

		let ansArr = [];
		for (let i = 0; i < num; i++) {
			if (
				next_greater_from_right[i] === -1 &&
				next_greater_from_left[i] === -1
			) {
				ansArr.push(-1);
			} else if (
				next_greater_from_right[i] === -1 &&
				next_greater_from_left !== -1
			) {
				ansArr.push(arr[next_greater_from_left[i]]);
			} else if (
				next_greater_from_left[i] === -1 &&
				next_greater_from_right !== -1
			) {
				ansArr.push(arr[next_greater_from_right[i]]);
			} else if (
				next_greater_from_right[i] !== -1 &&
				next_greater_from_left[i] !== -1
			) {
				if (next_greater_from_left[i] > next_greater_from_right[i]) {
					ansArr.push(arr[next_greater_from_right[i]]);
				} else {
					ansArr.push(arr[next_greater_from_left[i]]);
				}
			}
		}
		console.log(ansArr.join(' '));
	}
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    1
    5
    5 4 1 3 2`);
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
