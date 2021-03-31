function runProgram(input) {
	input = input.trim().split('\n');
	let num_of_input = input.shift();
	let arr1 = input[0].trim().split(' ').map(Number);
	let arr2 = input[1].trim().split(' ').map(Number);
	let queue = [];

	for (let i = 0; i < arr1.length; i++) {
		queue.push(arr1[i]);
	}

	let correctOrder = 0;
	let changedOrder = 0;

	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] !== queue[i]) {
			changedOrder += 1;
			let x = queue.shift();
			queue.push(x);
		}
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr2[i] === queue[i]) {
			correctOrder += 1;
		}
	}
	console.log(correctOrder + changedOrder);
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    3
    1 5 3
    1 5 4`);
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
