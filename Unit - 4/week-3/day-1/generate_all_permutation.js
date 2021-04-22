function permute(arr) {
	let result = new Array();
	backtrack(arr, result, new Array());
	return result;
}
function backtrack(arr, result, tempList) {
	// Add to result only if size matches
	if (tempList.length === arr.length) result.push(new Array(tempList));

	for (let i = 0; i < arr.length; i++) {
		// This is to make sure that same number is not added twice to result
		if (tempList.includes(arr[i])) continue;
		tempList.push(arr[i]);
		backtrack(arr, result, tempList);
		tempList.splice(tempList.length - 1, 0);
	}
}

function runProgram(input) {
	input = input.trim().split('\n');
	let arr = input[1].trim().split(' ').map(Number);
	console.log(permute(arr));
}

if (process.env.USERNAME === 'vishal') {
	runProgram(`
    3
    1 2 3`);
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
