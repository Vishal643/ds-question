let max = 0;
let min = Number.POSITIVE_INFINITY;
function masaiPackers(n, arr, k, current_weight, days) {
	if (current_weight > k) return;
	if (current_weight === k) {
		max = Math.max(days, max);
		min = Math.min(days, min);
		return;
	}

	for (let i = 0; i < arr.length; i++) {
		masaiPackers(n, arr, k, current_weight + arr[i], days + 1);
	}
}

function runProgram(input) {
	input = input.trim().split('\n');
	let k = input[0].trim().split(' ').map(Number)[0];
	let n = input[0].trim().split(' ').map(Number)[1];
	let arr = input[1].trim().split(' ').map(Number);
	let curr_weight = 0;
	let days = 0;
	masaiPackers(n, arr, k, curr_weight, days);
	if (max > 0) {
		console.log(min, max);
	} else {
		console.log(-1);
	}
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    39 3
	8 10 2`);
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
