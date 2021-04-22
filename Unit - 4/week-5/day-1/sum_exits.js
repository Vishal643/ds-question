let count = 0;
function sum_exists(arr, index, curr, sum1) {
	if (index === arr.length) {
		let sum = 0;
		if (curr.length) {
			for (let i = 0; i < curr.length; i++) {
				sum += curr[i];
			}
			if (sum === sum1) {
				count++;
			}
		}
		return;
	} else {
		sum_exists(arr, index + 1, curr, sum1);
		curr.push(arr[index]);
		sum_exists(arr, index + 1, curr, sum1);
		curr.pop();
	}
}

function runProgram(input) {
	input = input.trim().split('\n');
	let arr = input[1].trim().split(' ').map(Number);
	let sum = +input[2].trim();
	let curr = [];
	let index = 0;
	sum_exists(arr, index, curr, sum);
	console.log(count >= 1 ? 'yes' : 'no');
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    5
	1 2 3 6 9
	16`);
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
