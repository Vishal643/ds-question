function nextGreater(num, arr) {
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

function nextSmaller(num, arr) {
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
	input = input.trim().split('\n').map(Number);
	let num = Number(input.shift());

	let arr = input;
	let next_greater = nextGreater(num, arr);
	let next_smaller = nextSmaller(num, arr);

	let ansArr = [];
	for (let i = 0; i < num; i++) {
		if (next_greater[i] != -1 && next_smaller[next_greater[i]] != -1) {
			ansArr.push(arr[next_smaller[next_greater[i]]]);
		} else {
			ansArr.push(-1);
		}
	}
	console.log(ansArr.join(' '));
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`8
    3
    7
    1
    7
    8
    4
    5
    2`);
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
