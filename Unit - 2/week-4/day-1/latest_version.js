function runProgram(input) {
	input = input.trim().split('\n');
	let version1 = input[0].trim();
	let version2 = input[1].trim();

	const compareFunction = (version1, version2) => {
		let num1 = 0,
			num2 = 0;

		for (
			let i = 0, j = 0;
			i < version1.length || j < version2.length;
			i++, j++
		) {
			while (i < version1.length && version1[i] != '.') {
				num1 = num1 * 10 + Number(version1[i]);
				i++;
			}

			while (j < version2.length && version2[j] != '.') {
				num2 = num2 * 10 + Number(version2[j]);
				j++;
			}
			if (num1 > num2) return 1;
			if (num2 > num1) return -1;

			if (num1 === num2) {
				num1 = 0;
				num2 = 0;
			}
		}
		return 0;
	};

	if (compareFunction(version1, version2) < 0)
		console.log('Version 1' + ' is the latest.');
	else if (compareFunction(version1, version2) > 0)
		console.log('Version 2' + ' is the latest.');
	else console.log('Both Versions are equal.');
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    1.0.01.10
	1.0.0.10`);
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
