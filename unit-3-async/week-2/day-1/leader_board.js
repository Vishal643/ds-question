function runProgram(input) {
	input = input.trim().split('\n');

	let number_input = +input.shift();

	const customSort = (a, b) => {
		if (b[1] > a[1]) {
			return 1;
		} else if (a[1] > b[1]) {
			return -1;
		} else if (b[1] === a[1]) {
			if (b[0] < a[0]) {
				return 1;
			} else {
				return -1;
			}
		}
	};
	
	let a = input
		.map((el) => el.trim().split(' '))
		.map((el) => [el[0], +el[1]])
		.sort(customSort);

	let rank = 1;
	a.forEach((arr, i) => {
		if (i === 0) {
			console.log(rank + ' ' + arr[0]);
			return;
		}
		if (arr[1] === a[i - 1][1]) {
			console.log(rank + ' ' + arr[0]);
		} else {
			rank = i + 1;
			console.log(rank + ' ' + arr[0]);
		}
	});
}
if (process.env.USERNAME === 'vishal') {
	runProgram(`
    6
	rancho 45
	chatur 32
	raju 30
	farhan 28
	virus 32
	joy 45`);
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
